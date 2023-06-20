import { localStorageService } from "@/shared";
import {
  ADD_TASK,
  CHECKED_TASK,
  DELETE_TASK,
  GET_EDIT_ID,
  UPDATE_TASK,
} from "./constants";

export const mutations = {
  [ADD_TASK](state, task) {
    state.tasks.unshift(task);
    state.taskDescription = "";
    state.taskTitle = "";
    localStorageService.set("TASK", state.tasks);
  },
  [UPDATE_TASK](state, task) {
    const findTask = state.tasks.find((t) => t.id === task.id);
    if (!findTask) return;

    findTask.title = task.title;
    findTask.description = task.description;

    state.taskDescription = "";
    state.taskTitle = "";
    state.editTaskId = null;
    localStorageService.set("TASK", state.tasks);
  },
  [DELETE_TASK](state, id) {
    const taskIndex = state.tasks.findIndex((item) => item.id === id);

    if (taskIndex === -1) return;

    state.tasks.splice(taskIndex, 1);
    localStorageService.set("TASK", state.tasks);
  },
  [CHECKED_TASK](state, { id, isCompleted }) {
    const findTask = state.tasks.find((task) => task.id === id);
    if (!findTask) return;

    findTask.completed = !isCompleted;
    localStorageService.set("TASK", state.tasks);
  },
  setInputTaskTitle(state, value) {
    state.taskTitle = value;
  },
  setInputTaskDesctiption(state, value) {
    state.taskDescription = value;
  },
  [GET_EDIT_ID](state, { id, title, description }) {
    state.editTaskId = id;
    state.taskTitle = title;
    state.taskDescription = description;
  },
};
