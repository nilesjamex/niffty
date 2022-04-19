<template>
   <section class="signup">
      <div class="signup--box">
          <div class="signup--intro">
              <div class="signup--intro--logo">
                  <img src="@/assets/logo.svg" alt="">
              </div>
              <div class="signup--intro--content">
                  <div class="signup--intro--content--profile">
                    <div class="signup--intro--content--profile--image">
                      <img src="@/assets/pfp.svg" alt="">
                    </div>
                    <div class="signup--intro--content--profile--text">
                      <h4>
                        Babatunde Fashola
                      </h4>
                      <p>
                        baba2@gmail.com
                      </p>
                    </div>
                  </div>
                  <div class="signup--intro--content--expense">
                    <p>
                      Target Monthly Expenses
                    </p>
                    <h2>
                      ₦596,000
                    </h2>
                    <div class="percent">
                      <div class="line1"></div>
                      <div class="line2"></div>
                    </div>
                  </div>
                  <div class="signup--intro--content--tab">
                    <p>
                      Daily Expenses Summary
                    </p>
                    <div class="signup--intro--content--tab--summary">
                      <div class="signup--intro--content--tab--summary--heading">
                        <p>Date</p>
                      <p>Amount</p>
                      </div>
                      <div class="signup--intro--content--tab--summary--content">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.06372 12.1274C9.41262 12.1274 12.1274 9.41262 12.1274 6.06372C12.1274 2.71482 9.41262 0 6.06372 0C2.71482 0 0 2.71482 0 6.06372C0 9.41262 2.71482 12.1274 6.06372 12.1274Z" fill="#4DE897"/>
</svg>
                        <p>30 Nov, 2018</p>
                      <p>₦30,000</p>
                      </div>
                    </div>
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
                              Already have an account? <span><a href="/login">Login Here</a></span>
                          </p>
                      </div>
                  </div>
              </form>
               <div class="signup--form--terms">
              <p>
                  By clicking on Login, you agree to our <span>Terms & Conditions and Privacy Policy</span>
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

<style scoped lang="scss">
@import '@/styles/mixins.scss';
@import '@/styles/_variables.scss';
@import '@/styles/_typography.scss';
.signup {
    padding: 5rem 7% 5rem 3%;
    background: #FFFFFF;
}
.signup--box {
    @include flex(space-between,);
}
.signup--intro--content {
    width: 392px;
    margin-top: 2rem;
    text-align: center;
}
.signup--intro--content--profile {
  display: flex;
  gap: 2rem;
}
.signup--intro--content--profile--text {
  align-self: flex-end;
  text-align: left;
  h4 {
    @include name;
  }
  p {
    margin: 0rem 0 0.05rem 0;
    @include email;
  }
}
.signup--intro--content--expense {
  margin-top: 2rem;
  text-align: left;
  p {
    @include email;
  }
  h2 {
    @include name;
  }
}
.percent {
  width: 378px;
  position: relative;
  height: 7px;
  border-radius: 10px;
  .line1 {
    width: 100%;
    height: 7px;
    background: #EFEFEF;
  }
  .line2 {
    position: relative;
    height: 7px;
    width: 20%;
    background: #4DE897;
    border-radius: 10px;
  }
}
</style>