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
          <p>
            by Babatunde Fashola
          </p>
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
    h2 {
      @include heading
    }
  }
}
</style>