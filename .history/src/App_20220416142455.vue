<template>
 <Nav />
  <router-view/>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue"
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
