import { use } from "react";

import type { ITask, TaskClassesByVariantData } from "../types/task.type";
import { DEFAULT_VARIANT, TODO_VARIANT } from "../types/task.type";

import {
  TASK_CLASSES_BY_VARIANT,
  TASK_ICONS,
  TASK_STATUS_ICONS,
  TASK_NAMES,
} from "../data/task.data";

import { SidebarContext } from "../context/sidebarContext";

function Task(props: ITask) {
  const { open } = use(SidebarContext);

  const baseVariant = props.variant || DEFAULT_VARIANT;

  const canShowStatusIcon = ![TODO_VARIANT, DEFAULT_VARIANT].includes(
    baseVariant,
  );

  const isDefaultVariant = baseVariant === DEFAULT_VARIANT;

  const isTodoVariant = baseVariant === TODO_VARIANT;

  const variant: TaskClassesByVariantData =
    TASK_CLASSES_BY_VARIANT[baseVariant];

  return (
    <>
      <section
        className={`task p-4 flex justify-between rounded-xl cursor-pointer ${variant.base}`}
        onClick={() => open(baseVariant)}
      >
        <div className="flex gap-4">
          <div
            className={`h-10 w-10 flex items-center justify-center rounded-lg ${isDefaultVariant ? variant.icon : "bg-white"}`}
          >
            {isDefaultVariant && (
              <img alt={baseVariant} src="add_rounded.svg" />
            )}

            {!isDefaultVariant && TASK_ICONS[baseVariant]}
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-bold">{TASK_NAMES[baseVariant]}</h3>

            {isTodoVariant && (
              <ul>
                <li className="text-gray-600 text-lg leading-6">
                  <small>Task 1</small>
                </li>

                <li className="text-gray-600 text-lg leading-6">
                  <small>Task 2</small>
                </li>

                <li className="text-gray-600 text-lg leading-6">
                  <small>Task 3</small>
                </li>
              </ul>
            )}
          </div>
        </div>

        {canShowStatusIcon && (
          <div
            className={`h-10 w-10 flex items-center justify-center rounded-lg ${variant.icon}`}
          >
            <img alt={baseVariant} src={TASK_STATUS_ICONS[baseVariant]} />
          </div>
        )}
      </section>
    </>
  );
}

export default Task;
