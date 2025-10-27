function Board() {
  return (
    <>
      <div className="mt-1">
        <img alt="My Task Board App" src="logo.svg" />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-2xl">My Task Board Title</h1>

          <a href="#">
            <img alt="edit icon" src="edit.svg" />
          </a>
        </div>

        <p className="text-xs">My task board description</p>
      </div>
    </>
  );
}

export default Board;
