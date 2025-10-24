import { Pencil } from "lucide-react";

function Board() {
  return (
    <>
      <div className="mt-1">🟨</div>

      <div>
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-2xl">My Task Board Title</h1>

          <Pencil size={12} />
        </div>

        <p className="text-xs">My task board description</p>
      </div>
    </>
  );
}

export default Board;
