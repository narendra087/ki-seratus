import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  event: null,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.event = action.payload
    },
    editEvent: (state, action) => {
      console.log(action.payload)
    },
    removeEvent: (state, action) => {
      console.log(action.payload)
    },
  }
})

export const { addEvent, editEvent, removeEvent } = calendarSlice.actions

export default calendarSlice.reducer