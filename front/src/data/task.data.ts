import type { TaskClassesByVariant } from "../types/task.type";

export const TASK_CLASSES_BY_VARIANT: TaskClassesByVariant = {
  default: {
    base: "bg-amber-100",
    icon: "bg-amber-600",
  },
  to_do: {
    base: "bg-gray-200",
  },
  wont_do: {
    base: "bg-red-300",
    icon: "bg-red-600",
  },
  completed: {
    base: "bg-green-300",
    icon: "bg-green-600",
  },
  in_progress: {
    base: "bg-amber-300",
    icon: "bg-amber-600",
  },
};
