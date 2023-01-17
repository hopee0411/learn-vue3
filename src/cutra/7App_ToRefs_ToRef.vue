<template lang="">
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
    <p>year: {{ year }}</p>
    <p>price: {{ price }}</p>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef} from 'vue'
export default {
  setup(props) {
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 이 책을 지금 바로 읽습니다 ;)',
      price: '무료'
    })

    // const {author, title} = book
    // console.log('isRef', isRef(author))
    // console.log('typeof', typeof author)
    const {author, title} = toRefs(book)
    console.log('isRef', isRef(author))
    console.log('typeof', typeof author.value)

    const {year} = toRefs(book) // 객체에 여러가지 변수를 가져와서 할당할 때
    console.log('year', year.value)

    const price = toRef(book, 'price') // 하나의 변수만 가져와서 할당할 때
    console.log('year', price.value)
    return {
      author,
      title,
      book,
      year,
      price
    }
  }
}
</script>
<style lang=""></style>
