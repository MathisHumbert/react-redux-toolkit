import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import themeReducer from '../features/theme';
import usersReducer from '../features/users';
import personsStore from '../features/persons';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    users: usersReducer,
    persons: personsStore,
  },
});

export default store;
