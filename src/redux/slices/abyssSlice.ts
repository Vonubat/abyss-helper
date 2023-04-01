import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { DELIMITER, LS_ABYSSES_KEY, NULL_ROOM_STATE } from '../../constants';
import { IAbyss, IRoom, RoomsType } from '../../types';

type AbyssState = {
  [key in `room${RoomsType}`]: IRoom;
} & {
  abysses: IAbyss[];
};

const abyssesInitial: string | null = localStorage.getItem(LS_ABYSSES_KEY);

const initialState: AbyssState = {
  abysses: abyssesInitial ? (JSON.parse(abyssesInitial) as IAbyss[]) : [],
  roomOne: NULL_ROOM_STATE,
  roomTwo: NULL_ROOM_STATE,
  roomThree: NULL_ROOM_STATE,
};

const abyssSlice = createSlice({
  initialState,
  name: 'abyssSlice',
  reducers: {
    startAbyss: (state) => {
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
    finishAbyss: (state) => {
      const durationMs = dayjs(state.roomThree.end).diff(dayjs(state.roomOne.start));
      const resultData = `$RoomOne:\n${state.roomOne.data}\n${DELIMITER}\n$RoomTwo:\n${state.roomTwo.data}\n${DELIMITER}\n$RoomThree:\n${state.roomThree.data}\n${DELIMITER}\n`;

      const newAbyss: IAbyss = { created: state.roomOne.start as string, durationMs, data: resultData };

      state.abysses.push(newAbyss);
      localStorage.setItem(LS_ABYSSES_KEY, JSON.stringify(state.abysses));

      state.roomOne = NULL_ROOM_STATE;
      state.roomTwo = NULL_ROOM_STATE;
      state.roomThree = NULL_ROOM_STATE;
    },
    clearAbysses: (state) => {
      localStorage.removeItem(LS_ABYSSES_KEY);
      state.abysses = [];
    },
  },
});

export default abyssSlice.reducer;

export const { startAbyss, finishRoom, finishAbyss, clearAbysses } = abyssSlice.actions;

export const abyssSelector = (state: { abyssStore: AbyssState }) => state.abyssStore;
