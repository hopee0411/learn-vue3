<template lang="">
  <div>
    <h2>{{ company.name }}</h2>
    <h3>직원</h3>
    <p>{{ company.member.length > 0 ? 'true' : 'false' }}</p>
    <p>{{ hasMember }}</p>
    <p>{{ hasMember }}</p>
    <p>{{ existMember() }}</p>
    <p>{{ existMember() }}</p>
    <button v-on:click="counter++">counter: {{ counter }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>
<script>
import {ref, reactive, isRef, toRefs, toRef, readonly, computed} from 'vue'
export default {
  setup(props) {
    const company = reactive({
      name: '커트라',
      member: ['hy', 'jt', 'hn']
    })

    // 명령어가 한 줄일 경우 Arrow Function은 return과 중괄호를 생략 가능하다
    // const hasMember = computed(() => (company.member.length > 0 ? 'true' : 'false'))
    // computed가 메소드수보다 비용이 적게 든다. computed 한 번 가지는 데이터를 캐쉬한다. (캐쉬는 반응형 객체가 변경되는 시점)
    const hasMember = computed(() => {
      console.log('computed')
      return company.member.length > 0 ? 'true' : 'false'
    })

    // 이것은 함수이기 때문에 위에 html에 rendering 할 때 ()를 넣어줘야함
    const existMember = () => {
      console.log('method')
      return company.member.length > 0 ? 'true' : 'false'
    }

    const counter = ref(0)

    const firstName = ref('홍')
    const lastName = ref('길동')
    const fullName = computed(() => firstName.value + ' ' + lastName.value)
    console.log('console 출력', fullName.value)
    fullName.value = 'dkjfakjdsa' // 값 변경 안 됨

    // computed에 getter, setter 함수를 생성해서 값을 변경하거나 가져올 수 있음
    const getterSetterFullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        console.log('value', value)
        console.log(value.split(' '))
        ;[firstName.value, lastName.value] = value.split(' ')
      }
    })
    console.log('getterStterComputed', getterSetterFullName.value)
    getterSetterFullName.value = 'sky j' // set()함수를 이용한 것
    return {
      company,
      hasMember,
      existMember,
      counter,
      fullName
    }
  }
}
</script>
<style lang=""></style>
