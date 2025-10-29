import type { ITaskVariant } from "../types/task.type";

import TaskForm from "./TaskForm";

interface TaskManagerProps {
  isOpen: boolean;
  selectedTaskVariant: ITaskVariant;
  onClose: () => void;
}

function TaskManager({ isOpen, onClose }: TaskManagerProps) {
  if (!isOpen) return null;

  return (
    <div className="task-manager fixed top-0 left-0 w-full h-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50">
      <aside className="task-manager__aside fixed top-4 right-4 rounded p-4 shadow-lg w-1/2 max-w-xl h-[calc(100vh-2rem)] z-50 bg-white">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Task Details</h2>

          <button
            className="border border-gray-300 rounded p-1 hover:bg-gray-100 cursor-pointer"
            onClick={onClose}
          >
            <img src="close_bg_round.svg" alt="Close" />
          </button>
        </header>

        <div className="task-manager-content">
          <TaskForm />
        </div>
      </aside>
    </div>
  );
}

export default TaskManager;
