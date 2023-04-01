export interface IAbyssal {
  created: string;
  durationMs: number;
  data: string;
}

export interface IRoom {
  start: string | null;
  end: string | null;
  data: string | null;
}

export type RoomsType = 'One' | 'Two' | 'Three';
