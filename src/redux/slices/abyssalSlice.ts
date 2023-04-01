import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { DELIMITER, LS_ABYSSALS_KEY, NULL_ROOM_STATE } from '../../constants';
import { IAbyssal, IRoom, RoomsType } from '../../types';

type AbyssalState = {
  [key in `room${RoomsType}`]: IRoom;
} & {
  abyssals: IAbyssal[];
};

const abyssalsInitial: string | null = localStorage.getItem(LS_ABYSSALS_KEY);

const initialState: AbyssalState = {
  abyssals: abyssalsInitial ? (JSON.parse(abyssalsInitial) as IAbyssal[]) : [],
  roomOne: NULL_ROOM_STATE,
  roomTwo: NULL_ROOM_STATE,
  roomThree: NULL_ROOM_STATE,
};

const abyssalSlice = createSlice({
  initialState,
  name: 'abyssalSlice',
  reducers: {
    startAbyssal: (state) => {
      state.roomOne.start = dayjs().toJSON();
    },
    finishRoom: (state, action: PayloadAction<{ roomType: RoomsType; data: string }>) => {
      const { roomType, data } = action.payload;

      state[`room${roomType}`].data = data;

      switch (roomType) {
        case 'One':
          state.roomOne.end = dayjs().toJSON();
          state.roomTwo.start = dayjs().toJSON();

          break;
        case 'Two':
          state.roomTwo.end = dayjs().toJSON();
          state.roomThree.start = dayjs().toJSON();

          break;
        case 'Three':
          state.roomThree.end = dayjs().toJSON();

          break;

        default:
          throw new Error('Invalid roomType');
      }
    },
    finishAbyssal: (state) => {
      const durationMs = dayjs(state.roomThree.end).diff(dayjs(state.roomOne.start));
      const resultData = `$RoomOne\n-${DELIMITER}\n${state.roomOne.data}\n$RoomTwo\n-${DELIMITER}\n${state.roomTwo.data}\n$RoomThree\n-${DELIMITER}\n${state.roomThree.data}\n`;

      const newAbyssal: IAbyssal = { created: state.roomOne.start as string, durationMs, data: resultData };

      state.abyssals.push(newAbyssal);
      localStorage.setItem(LS_ABYSSALS_KEY, JSON.stringify(state.abyssals));

      state.roomOne = NULL_ROOM_STATE;
      state.roomTwo = NULL_ROOM_STATE;
      state.roomThree = NULL_ROOM_STATE;
    },
    clearAbyssals: (state) => {
      localStorage.removeItem(LS_ABYSSALS_KEY);
      state.abyssals = [];
    },
  },
});

export default abyssalSlice.reducer;

export const { startAbyssal, finishRoom, finishAbyssal, clearAbyssals } = abyssalSlice.actions;

export const abyssalSelector = (state: { abyssalStore: AbyssalState }) => state.abyssalStore;
