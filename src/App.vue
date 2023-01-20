<script setup></script>
<template>
  <div>
    <TheNav />
    <TheView />
  </div>
</template>
<script>
import TheNav from '@/components/TheNav.vue'
import TheView from '@/components/TheView.vue'
import {ref, reactive, isRef, toRefs, toRef, readonly, computed, watch} from 'vue'
export default {
  components: {
    TheNav,
    TheView
  },
  setup(props) {
    return {}
  }
}
</script>
<style scoped></style>
