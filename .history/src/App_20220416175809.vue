<template>

  <router-view/>
</template>
<script>
// @ is an alias to /src

export default {
  components: {
  }
}
</script>
<style lang="scss">


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
