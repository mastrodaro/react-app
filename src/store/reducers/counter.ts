import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchIncrement } from "@/services/increment";
import { AppThunk } from "@/store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchIncrement",
  async (amount: number /*, thunkApi*/) => {
    const response = await fetchIncrement(amount);
    return response.data; // cast will be possible here
  },
);

// manual option, not require adding to extra reducers
export const incrementAsyncManual =
  (amount: number): AppThunk =>
  async (dispatch /*, getState*/) => {
    const response = await fetchIncrement(amount);
    dispatch(incrementByValue(response.data));
  };

/// why export this?
export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByValue(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, { payload }) => {
      state.value += payload;
    });
  },
});

export const { increment, decrement, incrementByValue } = counter.actions;

export default counter.reducer;
