<template>

  <px-header />
  <px-task />

</template>

<script>
import PxHeader from '@/components/todo/PxHeader.vue'
import PxFilter from '@/components/todo/PxFilter.vue'
import PxTask from '@/components/todo/PxTask.vue'

export default {
name: 'App',
  components: {
    PxHeader,
    PxFilter,
    PxTask
  }
}
</script>