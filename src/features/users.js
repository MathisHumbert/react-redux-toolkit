import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../fakeData';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {},
  },
});

export default usersSlice.reducer;
