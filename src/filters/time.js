import Vue from 'vue';

Vue.filter('time', value => {
    if (value instanceof Date) {
        return `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`;
    }
});