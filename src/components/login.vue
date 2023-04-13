<template>
  <div class="login-form">
    <div class="login-form__container">
      <img src="/assets/logo.png" alt="Blinc Logo" class="login-form__logo">
      <h1 class="login-form__title">Log in</h1>
      <form class="login-form__form" @submit.prevent="login">
        <input v-model="username" type="text" class="login-form__input" placeholder="Username" />
        <input v-model="password" type="password" class="login-form__input" placeholder="Password" />
        <button type="submit" class="login-form__submit">Log In</button>
        <div class="login-form__links">
          <a href="#" class="login-form__link">Forgot Password?</a>
          <a href="#" class="login-form__link">Contact Support</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Perform login logic here, e.g. call an API to authenticate the user
      // using this.username and this.password as the credentials
      // Once login is successful, navigate to the desired page
      console.log('Logging in...');
    },
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.login-form__container {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-form__logo {
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
}

.login-form__title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.login-form__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form__input {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
}

.login-form__input:focus {
  border-bottom: 1px solid #0070e0;
}

.login-form__submit {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: #0070e0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}

.login-form__submit:hover {
  background-color: #0056b3;
}

.login-form__links {
  margin-top: 20px;
}

.login-form__link {
  color: #0070e0;
  margin-right: 10px;
  text-decoration: none;
}

.login-form__link:hover {
  text-decoration: underline;
}
</style>
