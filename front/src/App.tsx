import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";

import BaseLayout from "./layouts/BaseLayout";

import { useBoardStore } from "./stores/board.store";

import Dashboard from "./views/Dashboard";

import { useURL } from "./hooks/useURL";
import { useAPI } from "./hooks/useAPI";

function App() {
  const board = useBoardStore((state) => state.board);

  const loadById = useBoardStore((state) => state.loadById);

  const { api } = useAPI("/boards");
  const { path } = useURL();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && ![undefined, null, ""].includes(path)) {
      hasFetched.current = true;

      loadById(`/${path}`, api);
    }
  });

  return (
    <>
      <BaseLayout>
        {board && <pre>{JSON.stringify(board)}</pre>}

        <Dashboard />

        <ToastContainer position="bottom-right" />
      </BaseLayout>
    </>
  );
}

export default App;
