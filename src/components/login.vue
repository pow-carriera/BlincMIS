<template>
  <div class="calbona">
    <img src="../assets/BLINC-03.png" alt="Blinc Logo" class="login-form__logo" />
    <div class="container" :class="{ 'right-panel-active': isActive }" id="container">
      <div class="form-container sign-up-container">
<div class="form">
  
    <h1 class="pol">Create Account</h1>
    <div class="ampol">or use your email for registration</div>
    <input type="text" placeholder="Username" v-model="form.user.username" />
    <input type="password" placeholder="Password" v-model="form.user.passwordpassword" />
    <input type="text" placeholder="role" v-model="form.user.role" />
    <input type="text" placeholder="First Name" v-model="form.profile.firstName" />
    <input type="text" placeholder="Last Name" v-model="form.profile.lastName" />
    <input type="text" placeholder="Middle Name" v-model="form.profile.middleName" />
    <input type="text" placeholder="gender" v-model="form.profile.gender" />
    <input type="date" placeholder="Birth Date" v-model="form.profile.birthDate" />
    <input type="phone" placeholder="Contact Number" v-model="form.profile.contactNumber" />
    <input type="email" placeholder="Contact Email" v-model="form.profile.contactEmail" />
    <input type="text" placeholder="Employment Type" v-model="form.profile.employmentType" />
    <input type="text" placeholder="Department" v-model="form.profile.department" />
    <input type="date" placeholder="Date Hired" v-model="form.profile.hireDate" />
    <input type="text" placeholder="Supervisor Name" v-model="form.profile.supervisor" />
    <button @click="createUser()">Sign Up</button>
  
</div>
      </div>
      <div class="form-container sign-in-container">
      <div class="form">
        
            <h1 class="pol">Sign in</h1>
            <div class="ampol">or use your account</div>
            <input type="text" placeholder="Username" v-model="calbona.username" />
            <input type="password" placeholder="Password" v-model="calbona.password" />
            <a href="#">Forgot your password?</a>
            <br>
            <br>
            <button @click="loginUser()">Sign In</button>
      </div>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" id="signIn" @click="signToggle()">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and be present all the times</p>
            <button class="ghost" @click="signToggle()">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        user: {
          username: '',
          password: '',
          role: ''
        },
        profile: {
          lastName: '',
          firstName: '',
          middleName: '',
          gender: '',
          birthDate: '',
          contactNumber: '',
          contactEmail: '',
          employmentType: '',
          department: '',
          hireDate: '',
          supervisor: ''
        }
      },
      calbona: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    loginUser(){
      axios
        .post('auth/login', this.calbona)
        .then(response => {
          console.log(response.data)
          localStorage.setItem("calbona", JSON.stringify(response.data))
        })
        .catch((error)=> {
          console.log("Calbona: ", error)
        })
        .finally(()=> {
          if (localStorage.getItem("calbona")) {
            this.$router.push('/history')
          }
        })
    },
    createUser() {
      const newUser = {
        user: {
          ...this.form.user
        },
        profile: {
          ...this.form.profile,
          hireDate: new Date(this.form.profile.hireDate),        
        }
      }
      axios
        .post('/users', newUser)
        .then((response) => {
          // Handle successful response
          console.log('User created:', response.data)
          //reset the form

          this.form.username = ''
          this.form.password = ''
          this.form.role = ''
          this.form.lastName = ''
          this.form.firstName = ''
          this.form.middleName = ''
          this.form.gender = ''
          this.form.birthDate = ''
          this.form.contactNumber = ''
          this.form.contactEmail = ''
          this.form.employmentType = ''
          this.form.department = ''
          this.form.hireDate = ''
          this.form.supervisor = ''
        })
        .catch((error) => {
          // Handle error
          console.error('Failed to create user:', error)
          //reset the form
          this.form.username = ''
          this.form.password = ''
          this.form.role = ''
          this.form.lastName = ''
          this.form.firstName = ''
          this.form.middleName = ''
          this.form.gender = ''
          this.form.birthDate = ''
          this.form.contactNumber = ''
          this.form.contactEmail = ''
          this.form.employmentType = ''
          this.form.department = ''
          this.form.hireDate = ''
          this.form.supervisor = ''
        })
    }
  }
}
</script>
<script setup>
import { ref, watch } from 'vue'
const isActive = ref(false)
function signToggle() {
  isActive.value ? (isActive.value = false) : (isActive.value = true)
}
const name = ref('')
watch(name, () => {
  console.log(name.value)
})
const email = ref('')
watch(email, () => {
  console.log(email.value)
})
const password = ref('')
watch(password, () => {
  console.log(password.value)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1.pol {padding-top: 50px;
  padding-bottom: 10px;
}

h1 {
  font-weight: bold;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  padding: 5px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.ampol {
  padding-bottom: 10px;
}

button {
  border-radius: 20px;
  border: 1px solid #4c519f;
  background-color: #4c519f;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
  padding-top: 15px;
}

.form {
  background-color: #ffffff;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
  height: 90%;
  text-align: center;
  overflow: auto;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.calbona {
  width: 100%;
}

.login-form__logo {
  display: flex;
  width: 5.5em;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 755px;
  max-width: 100%;
  min-height: 380px;
  margin: auto;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  justify-content: center;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {

  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #4c519f;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>
