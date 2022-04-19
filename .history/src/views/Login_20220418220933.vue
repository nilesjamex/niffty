<template>
  <section class="signup">
      <div class="signup--box">
          <div class="signup--intro">
              <div class="signup--intro--logo">
                  <img src="@/assets/logo.svg" alt="">
              </div>
              <div class="signup--intro--content">
                  <div class="signup--intro--content--img">
                      <img src="@/assets/welcome.svg" alt="">
                  </div>
                  <div class="signup--intro--content--text">
                      <h2>
                          <span>Welcome back!</span> <br/> We miss you.
                      </h2>
                  </div>
              </div>
          </div>
          <!-- form -->
          <div class="signup--form">
              <form action="" @submit.prevent="handleSubmit">
                  <div class="signup--form--container">
                      <div class="signup--form--intro">
                          <h3>
                              Holla
                          </h3>
                          <p>
                              Sign in to the vibe!
                          </p>
                      </div>
                      <div class="signup--form--input">
                          <label>Email address</label>
                          <input type="email" name="" v-model="form.email" placeholder="Enter Email" id="">
                      </div>
                      <div class="signup--form--input">
                          <label>Password</label>
                          <input type="password" name="" v-model="form.password" placeholder="Enter Password" id="">
                      </div>
                      <button class="button--submit">
                          SIGN UP
                      </button>
                      <div class="signup--form--login">
                          <p>
                              Don't have an account? <span><a href="/signup">Register Here</a></span>
                          </p>
                      </div>
                       <div class="signup--form--terms">
              <p>
                  By clicking on Login, you agree to our <span>Terms & Conditions and Privacy Policy</span>
              </p>
          </div>
                  </div>
              </form>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json',
            'Authorization': `Bearer API_TOKEN`,
        };
            axios.post('https://campaign.fundall.io/api/v1/login', this.form, {headers: headers})
            .then(
        res => {
            console.log(res)
        }
    )
    .catch (
        err => {
            console.log(err)
        }
    );
    localStorage.setItem('token', response.data.token)
    this.$router.push('/dashboard');
        }
    }
}
</script>

<style scoped lang="scss">
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
    width: 600px;
    margin-top: 2rem;
}
.signup--intro--content {
    text-align: center;
}
.signup--intro--content--text {
    text-align: center;
    h2 {
        width: 369px;
        margin: 1.5rem auto 0 auto;
        @include heading1 {
        }
        span {
             @include heading1 {
            color: $access-bg;
        }
        }
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
    @include input {
        font-size: 16px;
        line-height: 20px;
        color: #30443C;
    }
}
::placeholder {
    @include placeholder;
}
.signup--form--intro {
    width: 400px;
    h3 {
        margin-bottom: 0.7rem;
        @include holla {
            font-weight: 400;
        }
    }
    p {
        @include holla-sign {
            font-weight: 400;
        }
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
    padding: 0.5rem;
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
.signup--form--terms {
    margin: 1.5rem auto 0 auto;
    max-width: 100%;
    width: 405px;
    text-align: center;
    p {
        @include login {
            color: #97A19D;
        }
        span {
            color: $access-bg;
        }
    }
}
</style>