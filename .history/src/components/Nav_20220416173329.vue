<template>
  <nav>
      <div>
          <img src="@/assets/logo.svg" alt="">
      </div>
      <ul>
          <li>
              <button class="button--signup" style="
              background: transparent;">
              LOG IN
              </button>
          </li>
          <li>
              <a>
              <button class="button--signup">
                  SIGN UP
              </button>
              </a>
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
    height: 10vh;
    @include flex(space-between, center);
    ul {
        display: flex;
        align-items: center;
        gap: 2rem;
      li {
          margin: 0 0.5rem;
      }
    }
}
</style>