import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../feature/counter/counter";
import userReducer from "../feature/user/user";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export default store;
