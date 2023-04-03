import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  modalClearHistory: boolean;
};

const initialState: ModalState = {
  modalClearHistory: false,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModalClearHistory: (state, { payload }: PayloadAction<boolean>) => {
      state.modalClearHistory = payload;
    },
  },
});

export default modalSlice.reducer;

export const { setModalClearHistory } = modalSlice.actions;

export const modalSelector = (state: { modalStore: ModalState }) => state.modalStore;
