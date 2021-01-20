<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="hello">hello</div>
    <simple-greeting></simple-greeting>
  </div>
</template>

<script>
import { SimpleGreeting } from '@newchic/components'
customElements.define('simple-greeting', SimpleGreeting)

export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello {
  display: flex;
  color: blue;
}
</style>
