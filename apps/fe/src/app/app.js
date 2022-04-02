import { Route } from 'react-router-dom';

import AddTask from '../components/add-task';
import Tasks from '../components/tasks';
import { Box } from '@mui/material';

export function App() {
  return (
    <>
      <Route
        path="/"
        exact
        render={() => (
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            height="100vh"
          >
            <AddTask />
            <Tasks />
          </Box>
        )}
      />
      {/* END: routes */}
    </>
  );
}
export default App;
