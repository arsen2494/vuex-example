<template>
  <div class="col-md-4">
      <h1>Todo List</h1>
      <new-todo></new-todo>
      <ul class="list-group">
          <li class="list-group-item todo-item" v-for="(todo, index) in todos" :key="index" @click="deleteTodo(index)">{{ todo }}</li>
      </ul>
  </div>
</template>

<script>
import NewTodo from "./NewTodo.vue";
import * as gettersType from "../store/getters.type";
import * as actionsType from "../store/actions.type";

export default {
  name: "Todos",
  components: {
    NewTodo
  },
  computed: {
    todos() {
      return this.$store.getters[gettersType.TODOS];
    }
  },
  methods: {
    deleteTodo(index) {
      this.$store.dispatch(actionsType.DELETE_TODO, index);
      this.$store.dispatch(actionsType.UPDATE_DATE);
    }
  }
};
</script>

<style>
.todo-item {
  cursor: pointer;
}
</style>
