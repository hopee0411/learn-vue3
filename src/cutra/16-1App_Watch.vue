<template lang="">
  <div>
    <button v-on:click="changeMessage()">changeMessage</button>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed, watch} from 'vue'
export default {
  setup(props) {
    const message = ref('Hello World')

    const changeMessage = () => {
      if (message.value === 'Hello World') {
        message.value = message.value + ' Change!'
      } else {
        message.value = 'Hello World'
      }
    }
    // message 데이터 변경에
    watch(message, (newValue, oldValue) => {
      //Dom

      //API~
      //state 변경
      console.log('newValue: ', newValue)
      console.log('oldValue: ', oldValue)
      // 어떠한 작업을 수행하는 "감시자" 역할을 합니다.
    })
    return {
      message,
      changeMessage
    }
  }
}
</script>
<style scoped></style>
