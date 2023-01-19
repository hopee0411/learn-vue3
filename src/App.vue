<template lang="">
  <div>

  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    const message = ref('Message')

    return {
      message
    }
  }
}
</script>
<style scoped></style>
