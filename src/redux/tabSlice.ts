import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const tabSlice = createSlice({
  name: "tabCounter",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { set } = tabSlice.actions;
export const selectCount = (state: RootState) => state.tabCounter.value;
export default tabSlice.reducer;
