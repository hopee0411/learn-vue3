<template lang="">
  <div>
    <h2 v-if="visible">Cutra Admin</h2>
    <button v-on:click="toggle()">click</button>
    <h2 v-if="toggle2">Cutra Admin</h2>
    <hr />
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr />
    <h1 v-show="ok">CUTRA TITLE</h1>
    <button v-on:click="ok = !ok">v-show click</button>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const ok = ref(true)
    return {
      visible,
      toggle,
      ok
    }
  }
}
</script>
<style scoped></style>
