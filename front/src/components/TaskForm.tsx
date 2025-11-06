import {
  TASK_CLASSES_BY_VARIANT,
  TASK_ICONS,
  TASK_NAMES,
  TASK_STATUS_ICONS,
} from "../data/task.data";

import {
  WONT_DO_VARIANT,
  COMPLETED_VARIANT,
  IN_PROGRESS_VARIANT,
} from "../types/task.type";
import type { ITaskVariant } from "../types/task.type";

function TaskForm() {
  const taskVariants: ITaskVariant[] = [
    WONT_DO_VARIANT,
    COMPLETED_VARIANT,
    IN_PROGRESS_VARIANT,
  ];

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500" htmlFor="name">
          Task name
        </label>

        <input
          className="border border-gray-300 rounded-lg p-2"
          type="text"
          id="name"
          name="name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-xs font-medium text-gray-500"
          htmlFor="description"
        >
          Description
        </label>

        <textarea
          className="border border-gray-300 rounded-lg h-40 p-2"
          id="description"
          name="description"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500">Icon</label>

        <div className="flex gap-2">
          {Object.values(TASK_ICONS)
            .filter(Boolean)
            .map((icon) => (
              <div className="h-12 w-12 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-200 [&:has(input:checked)]:border-amber-200 [&:has(input:checked)]:bg-amber-200">
                <input
                  type="radio"
                  name="icon"
                  id={`${Object.keys(TASK_ICONS).find(
                    (key) => TASK_ICONS[key as ITaskVariant] === icon,
                  )}_icon`}
                  hidden
                />

                <label
                  className="cursor-pointer"
                  name="icon"
                  htmlFor={`${Object.keys(TASK_ICONS).find(
                    (key) => TASK_ICONS[key as ITaskVariant] === icon,
                  )}_icon`}
                >
                  {icon}
                </label>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500">Status</label>

        <div className="grid grid-cols-2 gap-4">
          {taskVariants.map((variant) => (
            <div
              className="flex items-center gap-2 border-2 border-gray-200 rounded-xl p-2 [&:has(input:checked)]:border-blue-500"
              key={variant}
            >
              <div
                className={`h-10 w-10 flex items-center justify-center rounded-lg ${TASK_CLASSES_BY_VARIANT[variant].icon}`}
              >
                <img alt={variant} src={TASK_STATUS_ICONS[variant]} />
              </div>

              <div className="flex items-center justify-between grow gap-2">
                <label
                  htmlFor={variant}
                  name="status"
                  className="cursor-pointer"
                >
                  {TASK_NAMES[variant]}
                </label>

                <div className="relative flex items-center justify-center">
                  <input
                    className="appearance-none border-gray-200 checked:bg-blue-500 checked:border-blue-500 border rounded-full p-2"
                    type="radio"
                    id={variant}
                    name="status"
                    value={variant}
                  />

                  <img
                    src="done.svg"
                    alt="Check"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
