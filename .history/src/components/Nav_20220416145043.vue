<template>
  <nav>
      <div>
          <img src="@/assets/logo.svg" alt="">
      </div>
      <ul>
          <li>
              <h3>
              LOG IN
              </h3>
          </li>
          <li>
              <button class="button--signup">
                  SIGN UP
              </button>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/_variables.scss';
@import '@/styles/_typography.scss';
nav {
    height: 8vh;
    @include flex(space-around, center);
}
</style>