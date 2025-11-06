import { create } from "zustand";

import type { IBoard } from "../types/board.type";

import type { API } from "../hooks/useAPI";

type BoarsStore = {
  board?: IBoard;
  haveErrors: boolean;
  isLoading: boolean;
  loadById: (id: string, api: API) => void;
};

export const useBoardStore = create<BoarsStore>()((set) => ({
  board: undefined,
  haveErrors: false,
  isLoading: false,
  loadById: async (id: string, api: API) => {
    set({ isLoading: true });

    const response = await api.get(`/${id}`);

    if (response) {
      const { data } = (await response.json()) as { data: IBoard };

      set({ board: data, isLoading: false, haveErrors: false });
    } else {
      set({ isLoading: false, haveErrors: true });
    }
  },
}));
