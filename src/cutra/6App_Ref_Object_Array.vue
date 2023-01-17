<template lang="">
  <div></div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  setup(props) {
    // ref -> Object
    const count = ref(0)
    const state = reactive({
      count //count: count  -> key와 속성 값이 같으면 이렇게 표현가능
    })
    count.value++
    console.log('count.value', count.value)
    console.log('state.count', state.count)
    console.log('state.count.value', state.count.value) //value 속성이 unmapping 되어있음
    //ref -> Array
    const message = ref('Hello')
    const arr = reactive([message])
    console.log('arr[0]', arr[0])
    console.log('arr[0].value', arr[0].value) // 배열에 있을 때는 value mapping 되어 있음
    return {
      count,
      state
    }
  }
}
</script>
<style lang=""></style>
