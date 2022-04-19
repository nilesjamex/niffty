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
    background: #FCFBFC;
}
.signup--box {
    @include flex(space-between,);
}
.signup--intro--content {
    width: 100%;
    margin-top: 2rem;
}
.signup--intro--content {
    text-align: center;
}
.signup--intro--content--text {
    text-align: left;
    h2 {
        width: 369px;
        margin-top: 1.5rem;
        @include heading1 {
        }
        span {
             @include heading1 {
            color: $access-bg;
        }
        }
    }
    p {
        @include caption;
        width: 374px;
        margin-top: 2rem;
    }
}
form {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    border-radius: 6px;
    width: 592px;
    height: 635px;
    padding: 2rem 1rem;
}
.signup--form--container {
    margin: 0 auto;
    width: 450px;
}
label {
    display: block;
    margin: 0.4rem 0;
}
::placeholder {
    @include placeholder;
}
.signup--form--name--box {
    width: 400px;
    @include flex(space-between,);
    input {
        background: #FFFFFF;
        border: 1px solid #CAD0C9;
        box-sizing: border-box;
        border-radius: 4px;
        width: 180px;
        height: 45px;
        padding: 0.5rem;
        @include input;
        
    }
}
.signup--form--input {
    margin: 1.5rem 0;
    input {
    width: 400px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #CAD0C9;
    box-sizing: border-box;
    border-radius: 4px;
    }
}
button {
    margin: 2.5rem 0;
}
.signup--form--login {
    margin: 3rem auto 0 auto;
    max-width: 100%;
    width: 287.43px;
    p {
        @include login;
        span {
            color: $access-bg;
        }
    }
}
</style>