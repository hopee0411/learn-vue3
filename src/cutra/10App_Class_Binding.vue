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
      // computed를 사용해 여러 조건을 검수해서 객체로 사용
      return {
        active: true && true,
        'text-color': true && true
      }
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
