import * as types from './mutations.type';

export default {
    [types.MUTATE_ADD_TODO](state, payload) {
        state.todos.push(payload);
    },
    [types.MUTATE_UPDATE_DATE](state) {
        state.lastUpdate = new Date(Date.now());
    },
    [types.MUTATE_DELETE_TODO](state, payload) {
        state.todos.splice(payload, 1);
    },
    [types.MUTATE_CLEAR_TODOS](state) {
        state.todos = [];
    }
}