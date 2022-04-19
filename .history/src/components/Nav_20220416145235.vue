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
    padding: 1rem 5%;
    height: 8vh;
    @include flex(space-between, center);
    ul {
        display: flex;
        gap: 2rem;
      li {
          h3 {
              @include access {
                  
              }
          }
      }
    }
}
</style>