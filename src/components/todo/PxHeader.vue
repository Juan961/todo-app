<template>
  <header>
    <h1>Tasks</h1>
  </header>
</template>

<script>

export default {
  name: 'PxHeader'
}
</script>

<style scoped>

header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header h1 {
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  margin-left: 10px;
}

</style>