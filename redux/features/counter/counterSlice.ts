import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type CounterState = {
  value: number;
  wasSet: boolean;
};

const initialState: CounterState = {
  value: 0,
  wasSet: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...initialState, value: state.value + 1 };
    },
    decrement: (state) => {
      state.value -= 1;
      state.wasSet = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCounter: (_state, action: PayloadAction<number>) => {
      return { value: action.payload, wasSet: true };
    },
    reset: (_state) => {
      return initialState;
    },
  },
});

export const { increment, decrement, setCounter, reset } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counterSlice.value;

export default counterSlice.reducer;
