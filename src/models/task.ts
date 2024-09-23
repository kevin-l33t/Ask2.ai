export type Task = {
  id: string;
  status: "PENDING" | "COMPLETED";
  result: null | {
    id: string;
    modelType: string;
    coefficients: number[];
  };
};

export type GetModelResultArgs = {
  modelId: string;
  x: number;
};
