export interface ITask {
  variant?: ITaskVariant;
}

export const DEFAULT_VARIANT = "default";
export const TODO_VARIANT = "to_do";
export const WONT_DO_VARIANT = "wont_do";
export const COMPLETED_VARIANT = "completed";
export const IN_PROGRESS_VARIANT = "in_progress";

export type ITaskVariant =
  | typeof DEFAULT_VARIANT
  | typeof TODO_VARIANT
  | typeof WONT_DO_VARIANT
  | typeof COMPLETED_VARIANT
  | typeof IN_PROGRESS_VARIANT;

export type TaskClassesByVariant = {
  [key in ITaskVariant]: TaskClassesByVariantData;
};

export interface TaskClassesByVariantData {
  base: string;
  icon?: string;
}
