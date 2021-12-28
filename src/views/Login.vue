<template>
  <px-login-form />
</template>

<script>
import PxLoginForm from '@/components/login/PxLoginForm'

export default {
  name: 'Login',
  components: {
    PxLoginForm
  },
  mounted(){
    let user = localStorage.getItem('id_user')

    if(user){
      this.$router.push('/tasks')
    }
  }
}
</script>

<style>

</style>