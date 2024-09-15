import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTasks } from "../../constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      // gelen nesneye id ekle
      action.payload.id = v4();

      // diziye yeni nesneyi ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // silincek elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload);

      // diziden elemanı kaldır
      state.tasks.splice(i, 1);
    },

    editTask: (state, action) => {
      // güncellenicek elemanın sırasını bul

      const i = state.tasks.findIndex((i) => i.id == action.payload.id);

      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;
