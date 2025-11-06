import { createSlice } from '@reduxjs/toolkit';

const countersSlice = createSlice({
  name: 'counters',
  initialState: {
    counter: 0,
    clickCounter: 0,
  },
  reducers: {
    incrementCounter: (state) => {
        state.counter += 1;
    },
    decrementCounter: (state) => {
        state.counter -= 1;
    }

  },
});

export const { incrementCounter, decrementCounter} = countersSlice.actions;
export default countersSlice.reducer;