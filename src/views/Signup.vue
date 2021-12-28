<template>
  <px-signup-form />
</template>

<script>
import PxSignupForm from '@/components/register/PxSignupForm'

export default {
  name: 'Login',
  components: {
    PxSignupForm
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