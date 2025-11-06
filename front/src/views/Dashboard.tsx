import Board from "../components/Board";
import Task from "../components/Task";
import TaskManager from "../components/TaskManager";

import { SidebarContextProvider } from "../providers/SidebarContextProvider";

function Dashboard() {
  return (
    <SidebarContextProvider>
      <section className="dashboard w-full h-full max-w-xl mx-auto">
        <header className="flex gap-4">
          <Board />
        </header>

        <main className="flex flex-col gap-4 mt-4">
          <Task variant="in_progress" />

          <Task variant="completed" />

          <Task variant="wont_do" />

          <Task variant="to_do" />

          <Task />
        </main>

        <TaskManager />
      </section>
    </SidebarContextProvider>
  );
}

export default Dashboard;
