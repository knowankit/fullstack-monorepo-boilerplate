import { useQuery, useMutation } from '@apollo/client';
import { GET_TASKS } from '../api/task/queries';
import { DELETE_TASK } from '../api/task/mutations';
import { Button } from '@mui/material';

interface Task {
  _id: number;
  title: string;
}

type TaskType = {
  getTasks: Task[];
};

const Tasks = () => {
  const { loading, data } = useQuery<TaskType>(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK);

  const handleDelete = async (taskId: number) => {
    await deleteTask({
      variables: {
        id: taskId,
      },
      refetchQueries: [GET_TASKS],
    });
  };

  return (
    <>
      {!loading &&
        data &&
        data['getTasks'].map((task, index) => (
          <div key={index}>
            {task.title}{' '}
            <Button
              variant="contained"
              onClick={() => handleDelete(task._id)}
              color="error"
            >
              Delete
            </Button>
          </div>
        ))}
    </>
  );
};

export default Tasks;
