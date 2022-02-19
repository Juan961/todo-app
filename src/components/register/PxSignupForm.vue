<template>
  <main>
    <form @submit.prevent="register">
      <input v-model="form.name" type="text" placeholder="Name">
      <input v-model="form.email" type="email" placeholder="Email">
      <input v-model="form.password" type="password" placeholder="Password">
      <button type="submit">Register</button>
      <router-link to="/login">Already have an account?</router-link>
    </form>
  </main>
</template>

<script>
import auth from '@/logic/auth.logic.js'

export default {
  name: 'PxSignupForm',
  data(){
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register(){
      try {
        let response = await auth.register(this.form)

        if(response.data.user == 'Created') {
          alert("Cuenta creada")

        }
        
      } catch (err) {

        let msg = err.response.data.user    

        if(msg == "Duplicated"){
          alert("Este correo ya esta registrado")
        } else {
          alert("Error del servidor")
        }

      }

    }
  }
}

</script>

<style scoped>
main {
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
}

form input {
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 2px solid grey;
}

form button {
  padding: 5px 0;
  margin-bottom: 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  background: rgb(63, 193, 197);
  border: 2px solid rgb(63, 193, 197);
  color: white;
}
</style>