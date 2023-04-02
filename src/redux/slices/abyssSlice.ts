import { toast } from 'react-toastify';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LS_ABYSSES_KEY, NULLABLE_ABYSS, ValidationMsg } from '../../constants';
import { Abyss, RoomStatus, RoomType, StockData, StockType } from '../../types';

type AbyssState = {
  abysses: Abyss[];
  currentAbyss: Abyss;
};

const abyssesInitial: string | null = localStorage.getItem(LS_ABYSSES_KEY);

const initialState: AbyssState = {
  abysses: abyssesInitial ? (JSON.parse(abyssesInitial) as Abyss[]) : [],
  currentAbyss: NULLABLE_ABYSS,
};

const abyssSlice = createSlice({
  initialState,
  name: 'abyssSlice',
  reducers: {
    startAbyss: (state) => {
      state.currentAbyss.created = Date.now();
    },
    setRoom: (state, action: PayloadAction<{ type: RoomType; status: RoomStatus }>) => {
      const { type, status } = action.payload;

      switch (type) {
        case 'One':
          state.currentAbyss.roomOne = status;

          break;
        case 'Two':
          state.currentAbyss.roomTwo = status;

          break;
        case 'Three':
          state.currentAbyss.roomThree = status;

          break;
        default:
          throw new Error('Invalid RoomType');
      }
    },
    setStock: (state, action: PayloadAction<{ type: StockType; data: StockData }>) => {
      const { type, data } = action.payload;

      switch (type) {
        case 'Before':
          state.currentAbyss.stockBefore = data;

          break;
        case 'After':
          state.currentAbyss.stockAfter = data;

          break;
        default:
          throw new Error('Invalid StockType');
      }
    },
    finishAbyss: (state, action: PayloadAction<{ duration: string }>) => {
      const { duration } = action.payload;

      state.currentAbyss.duration = duration;
    },
    saveAbyss: (state) => {
      const { stockBefore, stockAfter, roomOne, roomTwo, roomThree } = state.currentAbyss;

      if (!stockBefore || !stockAfter || !roomOne || !roomTwo || !roomThree) {
        if (!stockBefore) {
          toast.error(ValidationMsg.stockBefore);
        }

        if (!stockAfter) {
          toast.error(ValidationMsg.stockAfter);
        }

        if (!roomOne) {
          toast.error(ValidationMsg.roomOne);
        }

        if (!roomTwo) {
          toast.error(ValidationMsg.roomTwo);
        }

        if (!roomThree) {
          toast.error(ValidationMsg.roomThree);
        }

        return undefined;
      }

      state.abysses.push(state.currentAbyss);
      localStorage.setItem(LS_ABYSSES_KEY, JSON.stringify(state.abysses));
      state.currentAbyss = NULLABLE_ABYSS;
      toast.success(ValidationMsg.success);

      return state;
    },
    clearAbysses: (state) => {
      localStorage.removeItem(LS_ABYSSES_KEY);
      state.abysses = [];
    },
  },
});

export default abyssSlice.reducer;

export const { startAbyss, setRoom, setStock, finishAbyss, saveAbyss, clearAbysses } = abyssSlice.actions;

export const abyssSelector = (state: { abyssStore: AbyssState }) => state.abyssStore;
