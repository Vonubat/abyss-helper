import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { NULL_ROOM_STATE } from '../../constants';
import { IAbyssal, IRoom } from '../../types';

type AbyssalState = {
  abyssals: IAbyssal[];
  roomOne: IRoom;
  roomTwo: IRoom;
  roomThree: IRoom;
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
    finishRoomOne: (state, action: PayloadAction<string>) => {
      state.roomOne.data = action.payload;

      state.roomOne.end = dayjs().toJSON();
      state.roomTwo.start = dayjs().toJSON();
    },
    finishRoomTwo: (state, action: PayloadAction<string>) => {
      state.roomTwo.data = action.payload;

      state.roomTwo.end = dayjs().toJSON();
      state.roomThree.start = dayjs().toJSON();
    },
    finishRoomThree: (state, action: PayloadAction<string>) => {
      state.roomTwo.data = action.payload;

      state.roomThree.end = dayjs().toJSON();
    },
    finishAbyssal: (_state) => {
      // TODO
    },
  },
});

export default abyssalSlice.reducer;

export const { startAbyssal, finishRoomOne, finishRoomTwo, finishRoomThree, finishAbyssal } = abyssalSlice.actions;

export const abyssalSelector = (state: { abyssalStore: AbyssalState }) => state.abyssalStore;
