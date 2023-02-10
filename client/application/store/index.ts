import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/client/application/reducers/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
