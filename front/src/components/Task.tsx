import { CircleCheck, LayoutList } from "lucide-react";

import type { ITask, TaskClassesByVariantData } from "../types/task.type";

import { TASK_CLASSES_BY_VARIANT } from "../data/task.data";

function Task(props: ITask) {
  const baseVariant = props.variant || "default";

  const canShowStatusIcon = !["to_do", "default"].includes(baseVariant);

  const variant: TaskClassesByVariantData =
    TASK_CLASSES_BY_VARIANT[baseVariant];

  return (
    <>
      <section
        className={`task p-4 flex justify-between rounded-xl ${variant.base}`}
      >
        <div className="flex gap-4">
          <div className="bg-white h-10 w-10 flex items-center justify-center rounded-lg">
            <LayoutList />
          </div>

          <div>
            <h3 className="font-bold">Task Status</h3>

            <p className="text-sm">Task 1</p>
            <p className="text-sm">Task 2</p>
            <p className="text-sm">Task 3</p>
          </div>
        </div>

        {canShowStatusIcon && (
          <div
            className={`h-10 w-10 flex items-center justify-center rounded-lg ${variant.icon}`}
          >
            <CircleCheck color="white" />
          </div>
        )}
      </section>
    </>
  );
}

export default Task;
