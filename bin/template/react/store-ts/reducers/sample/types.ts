export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type SampleSliceInitialState = {
  isLoading: boolean;
  message: string;
  todos: Todo[];
};
