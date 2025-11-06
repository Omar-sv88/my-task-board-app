import { useBoardStore } from "../stores/board.store";

function Board() {
  const board = useBoardStore((state) => state.board);

  if (!board) {
    return <h1>No boards found</h1>;
  }

  return (
    <>
      <div className="mt-1">
        <img alt="My Task Board App" src="logo.svg" />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-2xl">{board.name}</h1>

          <a href="#">
            <img alt="edit icon" src="edit.svg" />
          </a>
        </div>

        {board.description && <p className="text-xs">{board.description}</p>}
      </div>
    </>
  );
}

export default Board;
