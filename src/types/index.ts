export type Abyss = {
  [key in `stock${StockType}`]: StockData;
} & {
  [key in `room${RoomType}`]: RoomStatus;
} & {
  created: number | null;
  duration: string | null;
};

export type StockData = string | null;
export type StockType = 'Before' | 'After';

export type RoomStatus = 'All' | 'Partially' | null;
export type RoomType = 'One' | 'Two' | 'Three';
