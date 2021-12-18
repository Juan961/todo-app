<template>
  <main>
    <px-task-form v-if="showModal" @closeModal="toggleModal" />

    <px-filter />
    
    <section class="tasks">
      <div class="task" :style="{background: task.color}" v-for="task in tasks" :key="task.id">
        <p class="task__title"> {{ task.title }} </p>
        <p> Max date: {{ task.date }} </p>
      </div>
    </section>

    <px-new-task @openModal="toggleModal"/>
  </main>
</template>

<script>
import PxFilter from '@/components/todo/PxFilter'
import PxNewTask from '@/components/todo/PxNewTask'
import PxTaskForm from '@/components/todo/PxTaskForm'

export default {
  name: 'PxTask',
  components: {
    PxFilter,
    PxNewTask,
    PxTaskForm
  },
  data(){
    return {
      showModal: false,
      tasks: [
        {
          id:1,
          title:"Todo",
          desc:"Todo des",
          color:"#4bb1f8",
          date: "30-12-2021"
        },
        {
          id: 2,
          title: "Who the Hell Is Juliette? (¿Quién diablos es Juliette?)",
          desc: "Unsp trochan fx unsp femr, 7thQ",
          color: "#53db89",
          date: "30-12-2021"
        },
        {
          id: 3,
          title: "Saving Shiloh",
          desc: "Pulmonary edema due to chemicals, gases, fumes and vapors",
          color: "#f98a4b",
          date: "30-12-2021"
        }, {
          id: 4,
          title: "Once Upon a Scoundrel",
          desc: "Puncture wound without foreign body of unsp elbow, sequela",
          color: "#ff5e5e",
          date: "30-12-2021"
        }, {
          id: 5,
          title: "Friend of Mine, A (Ein Freund von mir)",
          desc: "Opera house as the place of occurrence of the external cause",
          color: "#838fa4",
          date: "30-12-2021"
        }, {
          id: 6,
          title: "Code Name Coq Rouge",
          desc: "Other cystostomy complication",
          color: "#634cfa",
          date: "30-12-2021"
        }, 
        {
          id: 7,
          title: "Young Girls of Rochefort, The (Demoiselles de Rochefort, Les)",
          desc: "Disp fx of olecran pro w/o intartic extn l ulna, 7thH",
          color: "#fb87e2",
          date: "30-12-2021"
        }, {
          id: 8,
          title: "Gen-Y Cops (Te jing xin ren lei 2) (Gen-X Cops 2: Metal Mayhem) (Metal Mayhem)",
          desc: "Oth physl fx upper end of r tibia, subs for fx w routn heal",
          color: "#ff5e5e",
          date: "30-12-2021"
        }, {
          id: 9,
          title: "Four Nights of a Dreamer (Quatre nuits d'un rêveur)",
          desc: "Polycythemia vera",
          color: "#53db89",
          date: "30-12-2021"
        }, {
          id: 10,
          title: "Machine Gun Kelly",
          desc: "Palsy (spasm) of conjugate gaze",
          color: "#4bb1f8",
          date: "30-12-2021"
        }
      ]
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
main {
  padding:10px;
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