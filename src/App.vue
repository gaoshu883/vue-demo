<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vuep :template="code"></vuep>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      code: ''
    }
  },
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
