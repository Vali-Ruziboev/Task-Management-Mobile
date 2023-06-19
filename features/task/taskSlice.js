import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    add: (state, action) => {
      const { title } = action.payload;
      state.values.push({
        id: state.values.length,
        title,
      });
    },

    remove: (state, action) => {
      state.values = state.values.filter(
        (task) => task.id !== action.payload.id
      );
    },

    update: (state, action) => {
      state.values = state.values.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});

export const { add, update, remove } = taskSlice.actions;

export default taskSlice.reducer;
