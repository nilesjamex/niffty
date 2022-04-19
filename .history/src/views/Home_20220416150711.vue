<template>
  <section>
    <div class="section--box">
      hello
    </div>
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/_variables.scss';
@import '@/styles/_typography.scss';
section {
  @include flex(center,center);
}
</style>