// Generic Action to handle Reducer Actions
export type Action<T extends any>  = {
  type: string;
  payload: T;
};
