<template>
    <div class="registration-form">
      <h2>Registration Form</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        },
        errors: {}
      };
    },
    methods: {
      register() {
        // Form validation
        this.errors = {};
        if (!this.form.name) {
          this.errors.name = 'Please enter your name';
        }
        if (!this.form.email) {
          this.errors.email = 'Please enter your email';
        } else if (!this.isValidEmail(this.form.email)) {
          this.errors.email = 'Please enter a valid email';
        }
        if (!this.form.password) {
          this.errors.password = 'Please enter your password';
        }
        // Submit the form
        if (Object.keys(this.errors).length === 0) {
          // Call an API or perform registration logic here
          console.log('Form submitted:', this.form);
          // Reset the form
          this.form.name = '';
          this.form.email = '';
          this.form.password = '';
        }
      },
      isValidEmail(email) {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.25rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  button[type="submit"] {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #0070c0;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #00529b;
  }
  </style>
  