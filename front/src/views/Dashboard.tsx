import { useState } from "react";

import Board from "../components/Board";
import Task from "../components/Task";
import TaskManager from "../components/TaskManager";

import { useSidebar } from "../hooks/useSidebar";

import type { ITaskVariant } from "../types/task.type";

function Dashboard() {
  const { isOpen, open, close } = useSidebar();

  const [selectedTaskVariant, setSelectedTaskVariant] =
    useState<ITaskVariant>("default");

  const handleTaskClick = (variant: ITaskVariant) => () => {
    setSelectedTaskVariant(variant);
    open();
  };

  return (
    <>
      <section className="dashboard w-full h-full max-w-xl mx-auto">
        <header className="flex gap-4">
          <Board />
        </header>

        <main className="flex flex-col gap-4 mt-4">
          <Task
            variant="in_progress"
            onClick={handleTaskClick("in_progress")}
          />

          <Task variant="completed" onClick={handleTaskClick("completed")} />

          <Task variant="wont_do" onClick={handleTaskClick("wont_do")} />

          <Task variant="to_do" onClick={handleTaskClick("to_do")} />

          <Task onClick={handleTaskClick("default")} />
        </main>

        <TaskManager
          isOpen={isOpen}
          selectedTaskVariant={selectedTaskVariant}
          onClose={close}
        />
      </section>
    </>
  );
}

export default Dashboard;
