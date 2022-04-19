<template>
  <section>
    <div class="section--box">
      <div class="home--img">
        <img src="@/assets/girl.svg" alt="">
      </div>
      <div class="home--text">
        <div class="home--text--content">
          <h2>
            Fundall Expense Tracker
          </h2>
          <h5>
            Mini Project Frontend
          </h5>
        </div>
        <div class="home--text--author">
          <h6>
            by Babatunde Fashola
          </h6>
        </div>
      </div>
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
  height: 90vh;
}
.section--box {
  text-align: center;
}
.home--text {
  margin: 3rem 0;
  .home--text--content {
    max-width: 100vw;
    margin: 0 auto;
    h2 {
    margin: 0 auto;
      @include heading1;
    }
    h5 {
    margin: 0 auto;
      margin: 1rem 0;
       @include heading1;
       font-weight: normal;
    }
  }
  .home--text--author {
    h6 {
      margin-top: 1.5rem;
      @include heading2;
       font-weight: normal;
    }
  }
}
</style>