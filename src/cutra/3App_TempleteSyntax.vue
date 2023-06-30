<template lang="">
  <div>
    <h2>보관법</h2>
    <p>message : {{ message }}</p>
    <p v-once>v-onse : {{ message }}</p>
    <button v-on:click="addMessage">addMessage</button>
    <hr />
    <h2>normal bind</h2>
    <p>{{ rawHtml }}</p>
    <h2>v-html</h2>
    <p v-html="rawHtml"></p>
    <hr />
    <h2>v-bind</h2>
    <div v-bind:title="dynamicTitle">Mouse Up</div>
    <button v-on:click="dynamicButton">dynamicButton</button>
    <br />
    <input type="text" value="홍길동" v-bind:disabled="isDisabled" />
    <br />
    <input v-bind="attrs" />
    <br />
    <button v-on:click="isDisabledButton">isDisabledButton</button>
    <h2>이중괄호 안에 Javasctipt 문법 사용</h2>
    <p>{{ message.split('').reverse().join('') }}</p>
    <p>{{ isDisabled ? '예' : '아니오' }}</p>
  </div>
</template>
<script>
//v-once 는 일회성만 보관
import {ref} from 'vue'
export default {
  setup(props) {
    const message = ref('cutra project')
    const addMessage = () => {
      message.value = message.value + '!'
    }
    const rawHtml = '<strong>Cutra Project</strong>'
    let dynamicTitle = ref('Dynamic Title')
    const dynamicButton = () => {
      if (dynamicTitle.value === 'Dynamic Title') {
        dynamicTitle.value = 'Normal Title'
      } else {
        dynamicTitle.value = 'Dynamic Title'
      }
    }
    const isDisabled = ref(true)
    const attrs = ref({
      type: 'password',
      value: '123456',
      disabled: isDisabled
    })
    const isDisabledButton = () => {
      if (isDisabled.value === true) {
        isDisabled.value = false
      } else {
        isDisabled.value = true
      }
    }
    return {
      message,
      addMessage,
      rawHtml,
      dynamicTitle,
      dynamicButton,
      isDisabled,
      attrs,
      isDisabledButton
    }
  }
}
</script>
<style lang=""></style>
