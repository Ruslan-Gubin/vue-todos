import { mapGetters, mapActions } from 'vuex';

const getters = (...args) => {
return mapGetters(args)
}

const actions = (...args) => {
return mapActions(args)
}

export const mapsVuexService = {
  getters,
  actions
}