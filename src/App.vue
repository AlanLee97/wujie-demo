<template>
  <div id="app">
    <h1>Main-App</h1>
    <div id="sub-apps"></div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#sub-apps {
  width: 100vw;
  min-height: 50vh;
  border: 1px solid red;
}
</style>
