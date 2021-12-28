<template>
  <header>
    <h1>Tasks</h1>
    <i @click="logOut" class='bx bxs-arrow-from-left'></i>
  </header>
</template>

<script>

export default {
  name: 'PxHeader',
  methods: {
    logOut(){
      localStorage.removeItem('id_user')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header h1 {
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  margin-left: 10px;
}

header i {
  font-size: 2rem;
  margin-right: 10px;
  cursor: pointer;
}

</style>