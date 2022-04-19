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
                        {{firstname}} {{lastname}}
                      </h4>
                      <p>
                        {{useremail}}
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
                      <div class="line2" :style="{ width: percent + '%'}"></div>
                    </div>
                  </div>
                  <div class="signup--intro--content--tab">
                    <p>
                      Daily Expenses Summary
                    </p>
                    <div class="signup--intro--content--tab--summary">
                      <div v-if="expenses.length === 0">
                        Nothing To Show Yet
                      </div>
                      <div v-else>
                      <div  class="signup--intro--content--tab--summary--heading">
                        <p>Date</p>
                      <p>Amount</p>
                      </div>
                      <div v-for="expense in expenses" :key="expense.date" class="signup--intro--content--tab--summary--content">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.06372 12.1274C9.41262 12.1274 12.1274 9.41262 12.1274 6.06372C12.1274 2.71482 9.41262 0 6.06372 0C2.71482 0 0 2.71482 0 6.06372C0 9.41262 2.71482 12.1274 6.06372 12.1274Z" fill="#4DE897"/>
</svg>
                        <p>{{expense.date}}</p>
                      <p>₦{{expense.total}}</p>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          <!-- form -->
          <div class="signup--form">
            <div class="signup--form--welcome">
              <div class="signup--form--welcome--text">
                <h2>
                  <span>Welcome back,</span> {{firstname}}
                </h2>
                <p>
                  Now, let’s get your expenses for this month
                </p>
              </div>
              <div class="signup--form--welcome--image">
                <img src="@/assets/boy.svg" alt="">
              </div>
            </div>
              <form @submit.prevent = "handlesubmit">
                  <div class="signup--form--container">
                     
                      <div class="signup--form--input">
                          <label>Target Monthly Expenses</label>
                          <input type="text" v-model="expense" readonly placeholder="Enter Email" id="">
                      </div>
                      <div class="signup--form--input">
                          <label>Date</label>
                          <input id="datepicker" v-model="expenseData.date" type="date" name="" required>
                      </div>
                          <label for="">Today’s Expenses</label>
                       <div class="signup--form--name--box">
                          <div class="signup--form--name">
                              <input type="text" placeholder="Pizza" id="" v-model="things.one" required>
                          </div>
                          <div class="signup--form--name">
                              <input type="number" v-model="expense1" name="" placeholder="10,000" id="" required>
                          </div>
                      </div>
                       <div class="signup--form--name--box">
                          <div class="signup--form--name">
                              <input type="text" placeholder="Textbook" id="" v-model="things.two" required>
                          </div>
                          <div class="signup--form--name">
                              <input type="number" v-model="expense2" name="" placeholder="10,000" id="" required>
                          </div>
                      </div>
                      <div class="signup--form--name--box">
                          <div class="signup--form--name">
                              <input type="text" placeholder="Tuition Fee" id="" v-model="things.three" required>
                          </div>
                          <div class="signup--form--name">
                              <input type="number" v-model="expense3" name="" placeholder="10,000" id="" required>
                          </div>
                      </div>
                      <div class="actual--expense">
                        <div class="actual--expense--text">
                          <p>
                            Total Actual Expenses: 
                          </p>
                        </div>
                        <div class="actual--expense--input">
                          <p>₦</p><input type="text" v-model="expenseData.total" placeholder="40,000" readonly>
                        </div>
                      </div>
                      <button class="button--expense">
                          SAVE TODAY’S EXPENSES
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
 async created() {
   console.log(localStorage.getItem('token'));
    const headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': true,
            'Authorization': `Bearer` + " " +  window.localStorage.getItem('token'),
        };
      const response = await axios.get('https://campaign.fundall.io/api/v1/base/profile', {headers: headers});
      console.log(response)
      console.log(response.data.success.data.email)
      this.image = response.data.success.data.avatar
      this.useremail = response.data.success.data.email
      this.useremail.charAt(0).toUpperCase
      this.firstname = response.data.success.data.firstname
      this.lastname = response.data.success.data.lastname
      this.expenseData.total = response.data.success.data.spent
      this.percent = response.data.success.data.spent/this.expense*100;
  },
  methods: {
    handlesubmit() {
      this.percent = this.expenseData.total/this.expense*100;
      this.expenses.push(this.expenseData)
       this.expense1 = null,
      this.expense2 = null,
      this.expense3 = null,
      this.expenseData = {},
      this.things = {}
    }
  },
  watch: {
    expense1(newExpense1, oldExpense1) {
      this.expenseData.total = newExpense1 + this.expense2 + this.expense3
    },
    expense2(newExpense2, oldExpense2) {
      this.expenseData.total = newExpense2 + this.expense1 + this.expense3
    },
    expense3(newExpense3, oldExpense3) {
      this.expenseData.total = newExpense3 + this.expense2 + this.expense3
    }
  },
  data() {
    return {
      expenses: [],
      expenseData: {
        date: null,
        total: null,
      },
      things: {
        one: "",
        two: "",
        three: "",
      },
      expense: 596000,
      expense1: null,
      expense2: null,
      expense3: null,
      percent: null,
      image: '',
      useremail: '',
      firstname: '',
      lastname: ''
    }
  },
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
  margin: 1.5rem 0 2.5rem 0;
  .line1 {
    width: 100%;
    height: 7px;
    background: #EFEFEF;
    position: absolute;
  }
  .line2 {
    position: absolute;
    z-index: 2;
    height: 7px;
    /* width: 50%; */
    background: #4DE897;
    border-radius: 10px;
  }
}
.signup--intro--content--tab {
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
  border-radius: 10px;
  width: 392px;
  height: 405px;
  padding: 1rem 2rem;
  p {
    text-align: left;
    margin: 1rem 0;
    @include expense {
      
    }
  }
}
.signup--intro--content--tab--summary {
  width: 310px;
  margin: 0 auto;
}
.signup--intro--content--tab--summary--heading {
  margin-top: 1.5rem;
  width: 270px;
  margin: 0 auto;
  @include flex(space-between,);
  p {
    @include login {
      color: #30443C;
    }
  }
}
.signup--intro--content--tab--summary--content {
  @include flex(space-between, center);
  height: 35px;
  svg {
    margin: auto 0;
  }
}
/* form */
.signup--form {
  background: #F2F3F7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  width: 700px;
  height: 766px;
  padding: 2rem 1rem;
}
.signup--form--welcome {
  width: 642px;
  height: 106px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.signup--form--welcome--text {
  align-self: center;
  h2 {
    @include email {
      color: #000000;
        }
        span {
             @include email {
            color: $access-bg;
        }
        }
  }
  p {
    margin: 0.5rem 0;
    @include expense--input;
  }
}
.signup--form--welcome--image {
  position: relative;
  bottom: 25%;
}
form {
  width: 590px;
  margin: 0 auto;
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
.signup--form--input {
    margin: 1.5rem 0;
    input {
    width: 400px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #4DE897;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.5rem;
    }
}
.signup--form--name--box {
    width: 600px;
    @include flex(space-between,);
    margin: 1.2rem 0;
    input[type = text] {
        background: #FFFFFF;
        border: 1px solid #CAD0C9;
        box-sizing: border-box;
        border-radius: 4px;
        width: 322px;
        height: 45px;
        padding: 0.5rem;
        @include input;   
    }
    input[type = number] {
        background: #FFFFFF;
        border: 1px solid #CAD0C9;
        box-sizing: border-box;
        border-radius: 4px;
        width: 243px;
        height: 45px;
        padding: 0.5rem;
        @include input;
    }
}
.actual--expense {
  @include flex(flex-end, center);
  margin: 1rem 0;
}
.actual--expense--text {
  p {
    @include login;
  }
}
.actual--expense--input {
  p {
    display: inline;
    margin: 0 0.2rem;
  }
  input {
    width: 115px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #4DE897;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.5rem;
  }
}
button {
    margin: 1.5rem auto;
}
/* remove arrow on numbers */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* for firefox */
input[type=number] {
  -moz-appearance: spinner-textfield;
}
</style>