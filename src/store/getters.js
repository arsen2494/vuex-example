import * as types from './getters.type';

export default {
    [types.TODOS](state) {
        return state.todos;
    },
    [types.LAST_UPDATE](state) {
        return state.lastUpdate;
    }
}