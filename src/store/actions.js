import * as types from './actions.type';
import * as mutationsType from './mutations.type';

export default {
    [types.ADD_TODO]({ commit }, payload) {
        commit(mutationsType.MUTATE_ADD_TODO, payload);
    },
    [types.UPDATE_DATE]({ commit }) {
        commit(mutationsType.MUTATE_UPDATE_DATE);
    },
    [types.DELETE_TODO]({ commit }, payload) {
        commit(mutationsType.MUTATE_DELETE_TODO, payload);
    },
    [types.CLEAR_TODOS]({ commit }) {
        commit(mutationsType.MUTATE_CLEAR_TODOS);
    }
}