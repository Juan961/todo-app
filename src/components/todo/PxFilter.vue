<template>
  <div class="header__filter">
    <span class="filter filter--left">Recent <i class='bx bx-chevron-down' ></i> <i class='bx bx-chevron-up' ></i> </span>
    <span class="filter filter--right"> <i class='bx bx-menu'></i> </span>
  </div>
</template>

<script>
export default {
  name: 'PxFilter'
}
</script>

<style>

.header__filter {
  width: 100%;
  color: var(--grey);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.header__filter span i{
  font-size: 1.5rem;
}

.filter {
  cursor: pointer;
  display: flex;
  align-items: center;
}

</style>