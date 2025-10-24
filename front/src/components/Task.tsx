import { CircleCheck, LayoutList } from "lucide-react";

function Task() {
  return (
    <>
      <section className="task p-4 flex justify-between bg-amber-300 rounded-xl">
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

        <div className="bg-amber-500 h-10 w-10 flex items-center justify-center rounded-lg">
          <CircleCheck color="white" />
        </div>
      </section>
    </>
  );
}

export default Task;
