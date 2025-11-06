export type BoardVariant = "to_do" | "wont_do" | "completed" | "in_progress";

export interface IBoard {
  id: string;
  description?: string;
  name: string;
  variant: BoardVariant;
  tasks: any[]; // TODO: Change this when implement it
}
