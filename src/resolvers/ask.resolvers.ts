import { AskSvc } from "../services";
import { GetModelResultArgs, RunRegressionInput } from "../models";

export const AskResolvers = {
  Query: {
    getModelResult: async (_: unknown, { modelId, x }: GetModelResultArgs) => {
      return AskSvc.getModelResult(modelId, x);
    },
    taskStatus: async (_: unknown, { id }: { id: string }) => {
      return await AskSvc.getTaskStatus(id);
    },
  },
  Mutation: {
    runRegression: async (
      _: unknown,
      { input }: { input: RunRegressionInput }
    ) => {
      return AskSvc.runRegression(input);
    },
  },
};
