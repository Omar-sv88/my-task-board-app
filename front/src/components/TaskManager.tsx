import type { ITaskVariant } from "../types/task.type";

interface TaskManagerProps {
  isOpen: boolean;
  selectedTaskVariant: ITaskVariant;
  onClose: () => void;
}

function TaskManager({
  isOpen,
  onClose,
  selectedTaskVariant,
}: TaskManagerProps) {
  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 right-0 bg-white p-4 shadow-lg w-1/2 max-w-xl h-full z-50">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Task Manager</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          <img
            className="cursor-pointer"
            src="close_bg_round.svg"
            alt="Close"
          />
        </button>
      </header>

      <div className="task-manager-content">{selectedTaskVariant}</div>
    </aside>
  );
}

export default TaskManager;
