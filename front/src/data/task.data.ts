import {
  COMPLETED_VARIANT,
  DEFAULT_VARIANT,
  IN_PROGRESS_VARIANT,
  TODO_VARIANT,
  WONT_DO_VARIANT,
} from "../types/task.type";
import type { ITaskVariant, TaskClassesByVariant } from "../types/task.type";

export const TASK_CLASSES_BY_VARIANT: TaskClassesByVariant = {
  [DEFAULT_VARIANT]: {
    base: "bg-amber-100",
    icon: "bg-amber-500",
  },
  [TODO_VARIANT]: {
    base: "bg-gray-200",
  },
  [WONT_DO_VARIANT]: {
    base: "bg-rose-200",
    icon: "bg-rose-500",
  },
  [COMPLETED_VARIANT]: {
    base: "bg-green-200",
    icon: "bg-green-500",
  },
  [IN_PROGRESS_VARIANT]: {
    base: "bg-amber-200",
    icon: "bg-amber-500",
  },
};

export const TASK_ICONS: { [key in ITaskVariant]: string } = {
  [DEFAULT_VARIANT]: "",
  [TODO_VARIANT]: "📚",
  [WONT_DO_VARIANT]: "☕",
  [COMPLETED_VARIANT]: "🏋️‍♂️",
  [IN_PROGRESS_VARIANT]: "⏰",
};

export const TASK_STATUS_ICONS: { [key in ITaskVariant]: string } = {
  [DEFAULT_VARIANT]: "",
  [TODO_VARIANT]: "",
  [WONT_DO_VARIANT]: "close_round.svg",
  [COMPLETED_VARIANT]: "done_round.svg",
  [IN_PROGRESS_VARIANT]: "time_attack_round.svg",
};

export const TASK_NAMES: { [key in ITaskVariant]: string } = {
  [DEFAULT_VARIANT]: "Add new task",
  [TODO_VARIANT]: "Task To Do",
  [WONT_DO_VARIANT]: "Task Won't do",
  [COMPLETED_VARIANT]: "Task Completed",
  [IN_PROGRESS_VARIANT]: "Task in Progress",
};
