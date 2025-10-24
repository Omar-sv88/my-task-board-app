export interface ITask {
  variant?: ITaskVariant;
}

export type ITaskVariant =
  | "default"
  | "to_do"
  | "wont_do"
  | "completed"
  | "in_progress";

export type TaskClassesByVariant = {
  [key in ITaskVariant]: TaskClassesByVariantData;
};

export interface TaskClassesByVariantData {
  base: string;
  icon?: string;
}
