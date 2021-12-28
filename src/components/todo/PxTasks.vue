<template>
  <main>
    <px-task-form v-if="showModal" @closeModal="toggleModal" @reload="reloadWindow" />
    <px-task v-if="showTask" :id="id_task" @closeTask="toggleTask" @reload="reloadWindow"/>
    
    <section class="tasks" v-if="tasks.length != 0">
      <div class="task" @click="toggleTask(task.id_task)" :style="{background: task.color_task}" v-for="task in tasks" :key="task.id_task">
        <p class="task__title"> {{ task.title_task }} </p>
        <p> Done: {{task.done_task ? "Finished" : "Unfinished" }}</p>
        <p> Max date: {{ task.date_task.substr(0, 10) }} </p>
      </div>
    </section>

    <section v-else>
      <h3>You dont have tasks please create one</h3>
    </section>


    <px-new-task @openModal="toggleModal" />
  </main>
</template>

<script>
import PxNewTask from '@/components/todo/PxNewTask'
import PxTaskForm from '@/components/todo/PxTaskForm'
import PxTask from '@/components/todo/PxTask'

import task from '@/logic/tasks.logic.js'

export default {
  name: 'PxTasks',
  components: {
    PxNewTask,
    PxTaskForm,
    PxTask
  },
  data(){
    return {
      showTask: false,
      id_task: 0,
      showModal: false,
      tasks: []
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleTask(task){
      this.id_task = task
      this.showTask = !this.showTask
    },
    reloadWindow(){
      console.log("Reload desde PxTask")
      this.$emit("reloadWindow")
    }
  },
  async mounted(){
    let id_user = localStorage.getItem('id_user')
    
    let result = await task.getAllTasks(id_user)

    this.tasks = result.data.data
  }
}
</script>

<style scoped>
main {
  padding:10px;
  min-height: calc(100vh - 70px);
}

.tasks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:30px;
}

.task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 125px;
  border-radius: 10px;
  padding: 15px;
  color: white;
  cursor: pointer;
}

.task__title {
  font-weight: bold;
}

@media (min-width: 450px) {
  .task {
    width: 200px;
  }
}

@media (min-width: 670px) {
  .task {
    width: 300px;
  }
}


</style>