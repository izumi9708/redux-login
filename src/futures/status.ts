import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  status: string
  name: string
  menu: boolean
}

export const statusSlice = createSlice({
  name: 'loginStatus',
  initialState: {
    status: 'login',
    name: '',
    menu: false
  } as initialState,
  reducers: {
    changeLoginStatus: (state) => {
      state.status = 'login'
    },
    changeTopStatus: (state) => {
      state.status = 'top'
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    menuActive: (state) => {
      state.menu = !state.menu
    },
    firstMenuHide: (state) => {
      state.menu = false
    }
  }
});

export const { changeLoginStatus, changeTopStatus, setName, menuActive, firstMenuHide } = statusSlice.actions;
export default statusSlice.reducer;