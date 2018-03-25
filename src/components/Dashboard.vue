<template>
  <div class="col-md-4">
      <div class="jumbotron">
          <h1 class="display-4">Dashboard</h1>
          <p class="lead">Last Update: {{ lastUpdate | time }}</p>
          <hr class="my-4">
          <p>Total item: {{ todos.length }}</p>
          <p class="lead">
            <button class="btn btn-danger" @click="clearTodos">Delete All</button>
          </p>
      </div>
  </div>
</template>

<script>
import * as gettersType from "../store/getters.type";
import * as actionsType from "../store/actions.type";

export default {
  name: "Dashboard",
  computed: {
    todos() {
      return this.$store.getters[gettersType.TODOS];
    },
    lastUpdate() {
      return this.$store.getters[gettersType.LAST_UPDATE];
    }
  },
  methods: {
    clearTodos() {
      this.$store.dispatch(actionsType.CLEAR_TODOS);
    }
  }
};
</script>

<style>

</style>
