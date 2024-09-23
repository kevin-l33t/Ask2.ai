import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getModelResult(modelId: ID!, x: Float!): Float
    taskStatus(id: ID!): RegressionTask
  }

  type Mutation {
    runRegression(input: RegressionInput!): RegressionTask
  }

  input RegressionInput {
    dataPoints: [DataPoint!]!
    modelType: ModelType!
    alpha: Float
  }

  input DataPoint {
    x: Float!
    y: Float!
  }

  enum ModelType {
    LINEAR
    LASSO
    RIDGE
  }

  type RegressionTask {
    id: ID!
    status: TaskStatus!
    result: Model
  }

  enum TaskStatus {
    PENDING
    COMPLETED
    FAILED
  }

  type Model {
    id: ID!
    modelType: ModelType!
    coefficients: [Float!]!
  }
`;
