import { create } from "zustand";

import type { IBoard } from "../types/board.type";

import type { API } from "../hooks/useAPI";

type BoarsStore = {
  board?: IBoard;
  isLoading: boolean;
  loadById: (id: string, api: API) => void;
  setBoard: (board: IBoard) => void;
};

export const useBoardStore = create<BoarsStore>()((set) => ({
  board: undefined,
  isLoading: false,
  loadById: async (id: string, api: API) => {
    set({ isLoading: true });

    const response = await api.get({ path: `/${id}` });

    if (response) {
      const board = (await response.json()) as IBoard;

      set({ board, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
  setBoard: (board: IBoard) => set({ board }),
}));
