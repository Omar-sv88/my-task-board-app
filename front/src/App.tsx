import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";

import BaseLayout from "./layouts/BaseLayout";

import { useBoardStore } from "./stores/board.store";

import Dashboard from "./views/Dashboard";

import type { IBoard } from "./types/board.type";

import { useURL } from "./hooks/useURL";
import { useAPI } from "./hooks/useAPI";

function App() {
  const setBoard = useBoardStore((state) => state.setBoard);
  const loadById = useBoardStore((state) => state.loadById);

  const { api } = useAPI("/boards");
  const { path: id } = useURL();

  const hasFetched = useRef(false);

  // BoardIds:
  // - f6a3b84c-8238-48dc-ae60-f18d1a1dd4f9
  // - 23d5cd83-9b02-4137-af1f-506f6249f4ac

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;

      if (![undefined, null, ""].includes(id)) {
        loadById(id, api);
      } else {
        api
          .post({
            body: {
              name: "My new test board",
              description: "This is my test board",
            },
          })
          .then((response) => response && response.json())
          .then((newBoard: IBoard) => setBoard(newBoard));
      }
    }
  });

  return (
    <>
      <BaseLayout>
        <Dashboard />

        <ToastContainer position="bottom-right" />
      </BaseLayout>
    </>
  );
}

export default App;
