import { ADD_TASK, CHECKED_TASK, DELETE_TASK, GET_EDIT_ID, UPDATE_TASK } from './constants'

export const actions = {
  addTask({ commit }, task) {
    commit(ADD_TASK, task);
  },
  updateTask({ commit }, task) {
    commit(UPDATE_TASK, task );
  },
  deleteTask({ commit }, id) {
    commit(DELETE_TASK, id);
  },
  checkToggleTask({ commit }, { id, isCompleted }) {
    commit(CHECKED_TASK, { id, isCompleted });
  },
  setEditTaskId({ commit }, { id, title, description }) {
    commit(GET_EDIT_ID, { id, title, description });
  },
}