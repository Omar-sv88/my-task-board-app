import Board from "../components/Board";
import Task from "../components/Task";

function Dashboard() {
  return (
    <>
      <section className="dashboard w-full h-full max-w-xl mx-auto">
        <header className="flex gap-4">
          <Board />
        </header>

        <main className="flex flex-col gap-4 mt-4">
          <Task />
          <Task />
          <Task />
        </main>
      </section>
    </>
  );
}

export default Dashboard;
