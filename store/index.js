import Cookie from 'js-cookie';
import cookieparser from 'cookieparser';
export const state = () => ({
  partOneKeyFound: false,
  partTwoKeyFound: false,
  seenShed: false,
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
};
