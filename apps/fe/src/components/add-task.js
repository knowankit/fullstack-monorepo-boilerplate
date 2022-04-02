import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../api/task/mutations';
import { GET_TASKS } from '../api/task/queries';
import { TextField, Button, Stack } from '@mui/material';

const AddTask = () => {
  const [createTask] = useMutation(CREATE_TASK);

  return (
    <div>
      <Formik
        initialValues={{ title: '', description: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          createTask({
            variables: {
              id: Math.floor(Math.random() * 10000),
              title: values.title,
              description: values.description,
            },
            refetchQueries: [GET_TASKS],
          });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <div>
                <TextField
                  type="text"
                  name="title"
                  label="Title"
                  size="small"
                  onChange={handleChange}
                  value={values.title}
                  variant="outlined"
                />
                {errors.title && touched.title && <p>{errors.title}</p>}
              </div>
              <div>
                <TextField
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="description"
                  label="Description"
                  size="small"
                  onChange={handleChange}
                  variant="outlined"
                  value={values.description}
                />
              </div>
              <div>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  color="success"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Add
                </Button>
              </div>
            </Stack>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTask;
