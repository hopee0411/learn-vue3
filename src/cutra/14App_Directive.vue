<template lang="">
  <div>
    <p>{{ message }}</p>
    <p v-text="message"></p>
    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>
    <p v-pre>{{ message }}</p>
    <p v-once>{{ message }} !!!!</p>
    <button v-on:click="message = message + '!'">click</button>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    const message = ref('Message')
    const htmlStr = ref('<strong>html 문자열</strong>')

    return {
      message,
      htmlStr
    }
  }
}
</script>
<style scoped></style>
