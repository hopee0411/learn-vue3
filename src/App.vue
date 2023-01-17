<template lang="">
  <div>
    <div :class="{active: isActive, 'text-color': hasError}">CUTRA</div>
    <button v-on:click="toggle">toggle</button>
    <button v-on:click="toggle2">toggle2</button>
    <div :class="classObject">CUTRA</div>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    let isActive = ref(true)

    const toggle = () => {
      isActive.value = !isActive.value
    }

    let hasError = ref(false)

    const toggle2 = () => {
      hasError.value = !hasError.value
    }

    // const classObject = reactive({
    //   active: true,
    //   'text-color': true
    // })
    const classObject = computed(() => {
      active: true && true,
      'text-color': ture
    })
    return {
      isActive,
      toggle,
      hasError,
      toggle2,
      classObject
    }
  }
}
</script>
<style scoped>
.active {
  background-color: aqua;
}
.text-color {
  color: blue;
  font-weight: 600;
}
</style>
