import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  status: string
}

export const statusSlice = createSlice({
  name: 'loginStatus',
  initialState: { status: 'login' } as initialState,
  reducers: {
    changeLoginStatus: (state) => {
      state.status = 'login'
    },
    changeTopStatus: (state) => {
      state.status = 'top'
    }
  }
});

export const { changeLoginStatus, changeTopStatus } = statusSlice.actions;
export default statusSlice.reducer;