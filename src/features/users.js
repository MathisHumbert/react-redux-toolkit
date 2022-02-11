import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../fakeData';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
