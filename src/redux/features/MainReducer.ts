import { createSlice } from '@reduxjs/toolkit'
export interface MaininitialState {
  dark:boolean
}
const initialState={
  dark:localStorage.getItem('dark')==="true"?true:false,
} as MaininitialState;
export const mainSlice= createSlice({
  name: 'main',
  initialState:initialState,
  reducers: {
    assign: (state, action) => {
      state += action.payload
    },
    themeControl:(state)=>{
      state.dark=!state.dark
        // save theme to local storage
        //localStorage.setItem('dark',state.dark.toString());
    }
  },
})

// Action creators are generated for each case reducer function
export const {assign,themeControl} = mainSlice.actions

export default mainSlice.reducer