<template>

  <px-header />
  <px-tasks @reloadWindow="reload" :key="keyValue"/>

</template>

<script>
import PxHeader from '@/components/todo/PxHeader.vue'
import PxTasks from '@/components/todo/PxTasks.vue'

export default {
name: 'App',
  components: {
    PxHeader,
    PxTasks
  },
  data(){
    return {
      keyValue: 0,
    }
  },
  mounted(){
    let user = localStorage.getItem('id_user')

    if(!user){
      this.$router.push('/login')
    }
  },
  methods: {
    reload(){
      this.keyValue += 1
    }
  }
}
</script>