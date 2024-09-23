# GraphQL Regression API

This project demonstrates a GraphQL API that allows clients to execute long-running linear regression models asynchronously. The server supports three regression models: Linear, Lasso, and Ridge, with an optional alpha parameter for Lasso and Ridge.

## Features

- **Run Regression Model**: Start a regression task with specified input parameters.
- **Get Model Result**: Retrieve the result of a completed regression task.
- **Check Task Status**: Check the status of a regression task.

## GraphQL Schema

### Query

- **`getModelResult(modelId: ID!, x: Float!): Float`**

  Retrieves the result of a regression model given its ID and an input value.

- **`taskStatus(id: ID!): RegressionTask`**

  Retrieves the current status of a regression task by its ID.

### Mutation

- **`runRegression(input: RegressionInput!): RegressionTask`**

  Starts a new regression task with the provided input.

### Example Quries and Mutation

- **`runRegression`**

  ```mutation {
  runRegression(input: {
    dataPoints: [
      { x: 1.0, y: 2.0 },
      { x: 2.0, y: 3.0 }
    ],
    modelType: LINEAR
  }) {
    id
    status
  }
  }
  ```

  - **`getModelResult`**

  ```query {
  getModelResult(modelId: "d34ee74d-3b89-49ea-bb08-8a202c0570c0", x: 4.0)
  }
  ```

  - **`taskStatus`**

  ```query {
  taskStatus(id: "d34ee74d-3b89-49ea-bb08-8a202c0570c0") {
    id
    status
    result {
      id
      modelType
      coefficients
    }
  }
  }
  ```

## Running the Server

To start the server, run:

Run this command `npm install` to install project dependencies

The server will be available at `http://localhost:4000`.
