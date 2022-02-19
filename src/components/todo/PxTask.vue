<template>

  <div class="modal">
    <div class="task-modal" :style="{background: value.color_task}">
      <i @click="closeTask" class='bx bx-x'></i>
      <div class="task" >
        <h2>{{ value.title_task }}</h2>
        <p> <strong>Description:</strong> {{ value.desc_task }} </p>
        <p> <strong>Date:</strong> {{ value.date_task }} </p>
        <p> <strong>{{value.done_task ? "Finished" : "Unfinished"}}</strong> </p>
        
        <button v-if="!value.done_task" @click="markAsFinished">Mark as finished</button>

        <button @click="delete_task">Delete</button>

      </div>
    </div>

  </div>
</template>

<script>
import { getTask, updateTask, deleteTask } from '@/logic/tasks.logic.js'

export default {
  name:'PxTask',
  data(){
    return {
      value: {}
    }
  },
  props : [
    'id'
  ],
  async mounted() {

    let id_task = this.id
    let id_user = localStorage.getItem('id_user')

    let result = await getTask({
      id_user,
      id_task
    })

    if(!result.data.data.length == 0) {
      this.value = result.data.data[0]
    }

  },
  methods: {
    async markAsFinished(){
      let id_task = this.id
      let id_user = localStorage.getItem('id_user')

      let result = await updateTask({
        id_user,
        id_task
      })

      this.value.done_task = 1

      this.$emit('reload')

    },
    async delete_task() {
      let result = await deleteTask({
        id_task: this.id,
        id_user: localStorage.getItem('id_user')
      })

      if(result.data.data.affectedRows == 1) {
        alert("Tarea eliminada correctamente")
        this.$emit('reload')

      }

    },
    closeTask(){
      this.$emit('closeTask')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: center;
}

.task-modal {
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  width: 90%;
  height: 50vh;
  color: white;
}

.task-modal > i {
  font-size: 1.7rem;
  color: white;
  background: rgba(255, 255, 255, 0.356);
  border-radius: 100%;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.task {
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.task button {
  margin-top: 10px;
  padding: 5px 20px;

}
</style>