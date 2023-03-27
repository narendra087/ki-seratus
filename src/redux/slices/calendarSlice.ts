import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
  events: [],
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload)
    },
    editEvent: (state, action) => {
      if (action?.payload?.id) {
        const indexEvent = state.events.findIndex((ev:any) => ev.id === Number(action.payload.id))
        if (indexEvent !== -1) {
          state.events[indexEvent].title = action.payload.title
        }
      }
    },
    removeEvent: (state, action) => {
      if (action?.payload) {
        const indexEvent = state.events.findIndex((ev:any) => ev.id === Number(action.payload))
        if (indexEvent !== -1) {
          state.events.splice(indexEvent, 1)
        }
      }
    },
  }
})

export const { addEvent, editEvent, removeEvent } = calendarSlice.actions

export default calendarSlice.reducer