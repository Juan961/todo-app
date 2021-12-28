<template>
  <div class="new-task">
    <span @click="openModal"> <i class='bx bx-plus plus-icon'></i> New Task</span>
  </div>
</template>

<script>
export default {
  name:'PxNewTask',
  methods :{
    openModal(){
      this.$emit('openModal')
    }
  }
}
</script>

<style>
.new-task {
  position: sticky;
  bottom: 0; 
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, white 0%, white 60%, transparent 100%);;
}

.new-task span {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  background: var(--blue);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1rem;
}

.plus-icon {
  font-size: 1.2rem;
}

</style>