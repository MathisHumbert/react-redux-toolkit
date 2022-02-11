import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPersons = createAsyncThunk('persons/getPersons', async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
});

const peronsSlice = createSlice({
  name: 'person',
  initialState: {
    persons: [],
    status: null,
  },
  extraReducers: {
    [getPersons.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPersons.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = 'success';
      state.persons = action.payload;
    },
    [getPersons.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default peronsSlice.reducer;
