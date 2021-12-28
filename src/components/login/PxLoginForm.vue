<template>
  <main>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="Correo">
      <input v-model="form.password" type="password" placeholder="Contraseña">
      <button type="submit">Entrar</button>
      <router-link to="/signup">¿No tienes cuenta?</router-link>
    </form>
  </main>
</template>

<script>
import auth from '@/logic/auth.logic.js'

export default {
  name: 'PxLoginForm',
  data(){
    return {
      form: {
        email:'',
        password: ''
      }
    }
  },
  methods: {
    async login(){
      try {
        let response = await auth.login(this.form)
        
        localStorage.setItem('id_user', response.data.id_user)
        this.$router.push('/tasks')
        
      } catch (err) {
        let code = err.response.data.code
        
        if(code === 1) {
          alert("El email no esta en la base de datos")
        } else if (code === 2) {
          alert("La contraseña es erronea")
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