<template>
  <section class="signup">
      <div class="signup--box">
          <div class="signup--intro">
              <div class="signup--intro--logo">
                  <img src="@/assets/logo.svg" alt="">
              </div>
              <div class="signup--intro--content">
                  <div class="signup--intro--content--img">
                      <img src="@/assets/girl.svg" alt="">
                  </div>
                  <div class="signup--intro--content--text">
                      <h2>
                          <span>Welcome!</span> Let’s get to know you.
                      </h2>
                      <p>
                          Your first step toward a better financial lifestyle starts here.
                      </p>
                  </div>
              </div>
          </div>
          <!-- form -->
          <div class="signup--form">
              <form action="">
                  <div class="signup--form--container">
                      <div class="signup--form--name--box">
                          <div class="signup--form--name">
                              <label>First Name</label>
                              <input type="text" name="" placeholder="Enter First Name" id="">
                          </div>
                          <div class="signup--form--name">
                              <label>Last Name</label>
                              <input type="text" name="" placeholder="Enter Last Name" id="">
                          </div>
                      </div>
                      <div class="signup--form--input">
                          <label>Email address</label>
                          <input type="email" name="" placeholder="Enter Email" id="">
                      </div>
                      <div class="signup--form--input">
                          <label>Password</label>
                          <input type="password" name="" placeholder="Enter Password" id="">
                      </div>
                      <div class="signup--form--input">
                          <label>Confirm Password</label>
                          <input type="password" name="" placeholder="Confirm Password" id="">
                      </div>
                      <button class="button--submit">
                          SIGN UP
                      </button>
                      <div class="signup--form--login">
                          <p>
                              Already have an account? <span>Login Here</span>
                          </p>
                      </div>
                  </div>
              </form>
               <div class="signup--form--terms">
              <p>
                  By clicking on Login, you agree to our Terms & Conditions and Privacy Policy
              </p>
          </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/_variables.scss';
@import '@/styles/_typography.scss';
.signup {
    padding: 5rem 7% 5rem 3%;
}
.signup--box {
    @include flex(space-between,);
}
.signup--intro--content {
    width: 100%;
}
.signup--intro--content {
    text-align: center;
}
</style>