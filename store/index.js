import Cookie from 'js-cookie';
import cookieparser from 'cookieparser';
export const state = () => ({
  partOneKeyFound: false,
  partTwoKeyFound: false,
  seenShed: false,
  arranca: false,
  faltaCombustible: false,
  averia: false,
});

export const mutations = {
  SET_PART_ONE_KEY_FOUND: (state, account) => {
    state.partOneKeyFound = account;
  },
  SET_PART_TWO_KEY_FOUND: (state, account) => {
    state.partTwoKeyFound = account;
  },
  SET_SEEN_SHED: (state, account) => {
    state.seenShed = account;
  },
  SET_ARRANCA: (state, account) => {
    state.arranca = account;
  },
  SET_FALTA_COMBUSTIBLE: (state, account) => {
    state.faltaCombustible = account;
  },
  SET_AVERIA: (state, account) => {
    state.averia = account;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (!req.headers.cookie) return;
    const parsed = cookieparser.parse(req.headers.cookie);
    if (parsed.part_one_key_found) {
      commit('SET_PART_ONE_KEY_FOUND', parsed.part_one_key_found);
    }
    if (parsed.part_two_key_found) {
      commit('SET_PART_TWO_KEY_FOUND', parsed.part_two_key_found);
    }
    if (parsed.seen_shed) {
      commit('SET_SEEN_SHED', parsed.seen_shed);
    }
    if (parsed.arranca) {
      commit('SET_ARRANCA', parsed.arranca);
    }
    if (parsed.falta_combustible) {
      commit('SET_FALTA_COMBUSTIBLE', parsed.falta_combustible);
    }
    if (parsed.averia) {
      commit('SET_AVERIA', parsed.averia);
    }
  },
  setPartOneKeyFound({ commit }, status) {
    Cookie.set('part_one_key_found', status);
    commit('SET_PART_ONE_KEY_FOUND', status);
  },
  setPartTwoKeyFound({ commit }, status) {
    Cookie.set('part_two_key_found', status);
    commit('SET_PART_TWO_KEY_FOUND', status);
  },
  setSeenShed({ commit }, status) {
    Cookie.set('seen_shed', status);
    commit('SET_SEEN_SHED', status);
  },
  setArranca({ commit }, status) {
    Cookie.set('arranca', status);
    commit('SET_ARRANCA', status);
  },
  setFaltaCombustible({ commit }, status) {
    Cookie.set('falta_combustible', status);
    commit('SET_FALTA_COMBUSTIBLE', status);
  },
  setAveria({ commit }, status) {
    Cookie.set('averia', status);
    commit('SET_AVERIA', status);
  },
};

export const getters = {
  getPartOneKeyFound(state) {
    return state.partOneKeyFound;
  },
  getPartTwoKeyFound(state) {
    return state.partTwoKeyFound;
  },
  getSeenShed(state) {
    return state.seenShed;
  },
  arranca(state) {
    return state.arranca;
  },
  faltaCombustible(state) {
    return state.faltaCombustible;
  },
  averia(state) {
    return state.averia;
  },
};
