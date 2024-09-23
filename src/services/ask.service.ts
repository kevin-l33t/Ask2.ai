import { v4 as uuidv4 } from "uuid";
import { Task } from "../models/task";
import { RunRegressionInput } from "../models/model";
import { tasks } from "../datasource";

export const AskSvc = {
  runRegression: (input: RunRegressionInput): Task => {
    const taskId = uuidv4();
    const task: Task = {
      id: taskId,
      status: "PENDING",
      result: null,
    };

    tasks[taskId] = task;

    // Simulate long-running task (mocked Python script)
    setTimeout(() => {
      task.status = "COMPLETED";
      task.result = {
        id: taskId,
        modelType: input.modelType,
        coefficients: [1.0], // Mock result
      };
    }, 60000); // 1 minute delay

    return task;
  },

  getModelResult: (modelId: string, x: number): number => {
    const task = tasks[modelId];
    if (!task || task.status !== "COMPLETED") {
      throw new Error("Model not completed or does not exist");
    }

    // Mock prediction result (return x + 1)
    return x + 1;
  },

  getTaskStatus: (id: string) => tasks[id], // Get task status
};
