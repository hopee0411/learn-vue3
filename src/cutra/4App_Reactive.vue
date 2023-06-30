<template lang="">
  <div>
    <h2>Reactive</h2>
    <button v-on:click="increament">Click {{ state.count }}</button>
    <button v-on:click="increament2">Deep Click {{ state.deep.count }}</button>
  </div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  setup(props) {
    const message = ref('Error MEssage')
    const state = reactive({
      count: 0,
      deep: {
        count: 0
      }
    })
    const increament = () => {
      state.count++
    }
    const increament2 = () => {
      state.deep.count++
    }
    return {
      message,
      state,
      increament,
      increament2
    }
  }
}
</script>
<style lang=""></style>
