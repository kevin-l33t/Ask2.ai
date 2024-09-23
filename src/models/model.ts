export type Model = {
  id: string;
  modelType: "LINEAR" | "LASSO" | "RIDGE";
  coefficients: number[];
};

export type RunRegressionInput = {
  modelType: "LINEAR" | "LASSO" | "RIDGE";
  dataPoints: { x: number; y: number }[];
  alpha?: number;
};
