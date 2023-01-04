<template>
  <div>
    <h2>반응형</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMesssage">Add message</button>
    <h2>일반</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMesssage">Add message</button>
  </div>
</template>

<script>
import {isRef, onUpdated, ref} from 'vue'

export default {
  setup() {
    // 반응형 상태 선언
    const reactiveMessage = ref('Reactive Message')
    // 일반 변수 선언
    let normalMessage = 'Normal Message'

    console.log('isRef(reactiveMessage): ', isRef(reactiveMessage)) // true
    console.log('isRef(normalMessage): ', isRef(normalMessage)) // false

    const addReactiveMesssage = () => {
      reactiveMessage.value = reactiveMessage.value + '!'
    }
    const addNormalMesssage = () => {
      normalMessage = normalMessage + '!'
    }

    onUpdated(() => {
      console.log('update component')
    })

    return {
      reactiveMessage,
      normalMessage,
      addReactiveMesssage,
      addNormalMesssage
    }
  }
}
</script>

<style lang="scss" scoped></style>
