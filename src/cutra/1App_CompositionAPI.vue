<template lang="">
  <div>
    <h2>반응형 메세지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMessage">Add Message</button>
    <h2>일반 메세지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMessage">Add Message</button>
  </div>
</template>
<script>
import {onBeforeMount, onMounted, ref} from 'vue'

export default {
  setup() {
    console.log('setup()')
    const reactiveMessage = ref('Cutra Reactive Message')
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!'
    }
    // console.log('isRef(reactiveMessage): ', isRef(reactiveMessage))
    let normalMessage = 'Cutra nomal Message'
    const addNormalMessage = () => {
      normalMessage = normalMessage + '!'
    }
    // console.log('isRef(addNormalMessage): ', isRef(addNormalMessage))
    onMounted(() => {
      console.log('onMounted()')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount()')
    })
    return {
      reactiveMessage,
      normalMessage,
      addReactiveMessage,
      addNormalMessage
    }
  }
}
</script>
<style lang=""></style>
