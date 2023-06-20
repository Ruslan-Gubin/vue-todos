import { state } from './init';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';


export const tasksModule = {
  state,
  getters,
  actions,
  mutations
};