import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch user data
export const fetchCustomer = createAsyncThunk('user/fetchCustomer',   async (_, { rejectWithValue }) => {

  try {
    const response = await fetch(`${import.meta.env.VITE_GET_ALL_CUSTOMERS}`, {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user');
    }

    return data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Initial state
const initialState = {
  customer: null,
  success: false,
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    logOut: (state) => {
      state.customer = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload; 
        state.success = true;
      })
      .addCase(fetchCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logOut } = customerSlice.actions;
export default customerSlice.reducer;
