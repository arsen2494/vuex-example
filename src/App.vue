<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <todos></todos>
        <div class="col-md-4"></div>
        <dashboard></dashboard>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Todos,
    Dashboard
  }
};
</script>

<style>
#app {
  padding: 15px;
}
</style>