<template lang="">
  <div>
    <p>message: {{ message }}</p>
    <p>message2: {{ message2.message }}</p>
    <p>refMessage: {{ refMessage }}</p>
    <button v-on:click="addMessage">AddMessage</button>
  </div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  setup(props) {
    let message = reactive('Hello Word') // Object 형태로 사용 해애한다 이런 형태 말고
    const message2 = reactive({
      message: 'Hello Word'
    })
    const refMessage = ref('Hello Word')
    const addMessage = () => {
      console.log('dd')
      message = message + '!'
      message2.message = message2.message + '!'
      refMessage.value = refMessage.value + '!'
    }

    return {
      message,
      addMessage,
      message2,
      refMessage
    }
  }
}
</script>
<style lang=""></style>
