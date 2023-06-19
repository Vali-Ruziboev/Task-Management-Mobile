import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import taskReducer from "../features/task/taskSlice";
import taskModalReducer from "../features/modal/taskModalSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    taskModal: taskModalReducer,
  },
});

setupListeners(store.dispatch);
