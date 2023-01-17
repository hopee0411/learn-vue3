<template lang="">
  <div>
    <p>{{ counter }}</p>
    <button v-on:click="increament">increament</button>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  setup(props, context) {
    const counter = ref(0)
    const message = ref('heelo Vue3')
    const increament = () => {
      counter.value++
    }
    return {
      counter,
      message,
      increament
    }
  },
  mounted() {
    console.log(this.counter)
  }
}
</script>
<style lang=""></style>
