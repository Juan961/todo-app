<template>
  <div class="modal">
    <div class="task-modal">
      <i @click="closeModal" class='bx bx-x'></i>

      <div class="input-group__main" :style="{background: task.color_task}">
        <input type="text" maxlength="50" v-model="task.title_task" required placeholder="Title">
      </div>

      <div class="input-group__secondary">
        <div class="input-group">
          <label for="">Description</label>
          <textarea name="" id="" v-model="task.desc_task" rows="5" required maxlength="150"> </textarea>
          
        </div>
        <div class="input-group">
          <label for="">Date</label>
          <input type="date" v-model="task.date_task" required>
        </div>
        <div class="input-group">
          <label for="">Color</label>
          <div>
            <input type="radio" name="color" v-model="task.color_task" value="#4bb1f8" checked>
            <input type="radio" name="color" v-model="task.color_task" value="#53db89">
            <input type="radio" name="color" v-model="task.color_task" value="#f98a4b">
            <input type="radio" name="color" v-model="task.color_task" value="#ff5e5e">
            <input type="radio" name="color" v-model="task.color_task" value="#838fa4">
            <input type="radio" name="color" v-model="task.color_task" value="#634cfa">
            <input type="radio" name="color" v-model="task.color_task" value="#fb87e2">
          </div>
          
        </div>
        
        <button @click="createTask">Create task</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { createTask } from '@/logic/tasks.logic.js'

export default {
  name:"PxTaskForm",
  data(){
    return {
      task : {
        title_task: '',
        desc_task: '',
        date_task: '',
        color_task: "#4bb1f8",
        id_user: localStorage.getItem('id_user')
      }
    }
  },
  methods: {
    async createTask(){
      
      let result = await createTask(this.task)

      if(result.data.data.affectedRows == 1) {
        console.log("Creada")
        this.$emit('reload')
      } else {
        alert("Error del servidor")
      }
    },
    closeModal(){
      this.$emit('closeModal')
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
}

.task-modal {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  background: white;
  width: 100%;
  height: 90vh;
  bottom: 0;
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

.input-group__main {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-group__main input {
  background: transparent;
  outline: none;
  font-size: 1.5rem;
  color: white;
  border: none;
}

.input-group__main input::placeholder {
  color: white;
}

.input-group__main input:focus {
  border: none;
}

.input-group__secondary {
  padding: 20px;
}

.task-modal button {
  width: 100%;
  color: white;
  background: #4bb1f8;
  border: 1px solid #4bb1f8;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.input-group textarea {
  resize: none;
}

</style>