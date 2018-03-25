<template>
    <div class="new-todo">
        <div class="form-group">
            <input type="text" placeholder="Type here..." class="form-control" v-model="todo" @keyup.13="addTodo">
        </div>
        <button class="btn btn-success" @click="addTodo">Add</button>
    </div>
</template>

<script>
import * as actionsType from "../store/actions.type";

export default {
  name: "NewTodo",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch(actionsType.ADD_TODO, this.todo);
      this.$store.dispatch(actionsType.UPDATE_DATE);
      this.todo = "";
    }
  }
};
</script>

<style>
.new-todo {
  margin-bottom: 15px;
}
</style>
