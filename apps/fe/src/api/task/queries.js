import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks {
    getTasks {
      _id
      title
      description
      status
      startDate
    }
  }
`;
