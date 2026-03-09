import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 模拟异步操作
export const fetchCount = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: amount });
      }, 1000);
    });
    return response.data;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value += action.payload;
      })
      .addCase(fetchCount.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;