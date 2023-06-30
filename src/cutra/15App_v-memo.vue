<template lang="">
  <div v-memo="[subscrivers]">
    <p>subscrivers: {{ subscrivers }}</p>
    <p>views: {{ views }}</p>
    <p>likes: {{ likes }}</p>
    <button @click="subscrivers++">Sub++</button>
    <button @click="views++">views++</button>
    <button @click="likes++">likes++</button>
  </div>
  <div>
    <p>subscrivers: {{ subscrivers }}</p>
    <p>views: {{ views }}</p>
    <p>likes: {{ likes }}</p>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    const subscrivers = ref(4000)
    const views = ref(400)
    const likes = ref(20)
    return {
      subscrivers,
      views,
      likes
    }
  }
}
</script>
<style scoped></style>
