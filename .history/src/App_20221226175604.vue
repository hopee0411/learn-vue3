<template>
  <div></div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const reactiveMessage = ref('Hello Reactive Message')
    const normalMessage = 'Hello Normal Message'
    return {
      reactiveMessage,
      normalMessage
    }
  }
};
</script>

<style lang="scss" scoped></style>
