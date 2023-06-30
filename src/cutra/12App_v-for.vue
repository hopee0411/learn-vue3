<template lang="">
  <div>
    <h2>v-for, v-if 동일 태그에 사용x, template을 활용</h2>
    <template v-for="(item, index) in items" :key="item.id">
      <li v-if="item.id % 2 === 0">{{ item.id }}(item.id), {{ index }}(index), {{ item.message }}</li>
    </template>
    <h2>li에 v-if를 넣지 않고 computed를 활용</h2>
    <template v-for="(item, index) in evenItems" :key="item.id">
      <li>{{ item.id }}(item.id), {{ index }}(index), {{ item.message }}</li>
    </template>
    <h2>Object반복</h2>
    <li v-for="(value, key, index) in myObject" :key="key">{{ key }} - {{ value }} - {{ index }}</li>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    const items = reactive([
      {id: 1, message: 'Java'},
      {id: 2, message: 'HTML'},
      {id: 3, message: 'CSS'},
      {id: 4, message: 'JavaScript'}
    ])
    const evenItems = computed(() => items.filter((item, index) => item.id % 2 === 0))
    const myObject = reactive({
      title: '제목입니다.',
      author: '홍길동',
      publishedAt: '2016-04-10'
    })
    return {
      items,
      evenItems,
      myObject
    }
  }
}
</script>
<style scoped></style>
