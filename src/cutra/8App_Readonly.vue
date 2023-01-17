<template lang="">
  <div></div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly} from 'vue'
export default {
  setup(props) {
    const original = reactive({
      count: 0
    })
    const copy = readonly(original)
    copy.count++ // readonly 설정 했기 때문에 값이 변하지 않음
    console.log('copy.count', copy.count)
    original.count++
    console.log('original.count', original.count)
    console.log('copy.count', copy.count)
    return {}
  }
}
</script>
<style lang=""></style>
