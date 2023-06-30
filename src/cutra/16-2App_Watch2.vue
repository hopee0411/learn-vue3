<template lang="">
  <div>
    <button v-on:click="x++">x++</button>
    <button v-on:click="y++">y++</button>
    <button v-on:click="obj.count++">obj++</button>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed, watch} from 'vue'
export default {
  setup(props) {
    const x = ref(0)
    const y = ref(0)
    const obj = reactive({
      count: 0
    })
    // watch(
    //   () => x.value + y.value,
    //   (sum, oldValue) => {
    //     console.log('sum:', sum)
    //     console.log('oldValue:', oldValue)
    //   }
    // )
    // watch([x, y], ([newX, newY], [oldX, oldY]) => {
    //   console.log('new x, y', newX, newY)
    //   console.log('old x, y', oldX, oldY)
    // })
    watch(obj, (newValue, oldValue) => {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    })
    return {
      x,
      y,
      obj
    }
  }
}
</script>
<style scoped></style>
