import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { NULL_ROOM_STATE } from '../../constants';
import { IAbyssal, IRoom, RoomsType } from '../../types';

type AbyssalState = {
  [key in `room${RoomsType}`]: IRoom;
} & {
  abyssals: IAbyssal[];
};

const initialState: AbyssalState = {
  abyssals: [],
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

    finishAbyssal: (_state) => {
      // TODO
    },
  },
});

export default abyssalSlice.reducer;

export const { startAbyssal, finishRoom, finishAbyssal } = abyssalSlice.actions;

export const abyssalSelector = (state: { abyssalStore: AbyssalState }) => state.abyssalStore;
