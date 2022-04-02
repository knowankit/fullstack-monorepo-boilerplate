import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($id: ID!, $title: String!, $description: String) {
    createTask(input: { _id: $id, title: $title, description: $description }) {
      _id
      title
      description
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { _id: $id }) {
      _id
      title
    }
  }
`;
