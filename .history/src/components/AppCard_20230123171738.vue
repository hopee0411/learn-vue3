<template lang="">
  <div>
    <div class="card">
      <div class="card-body">
        <span class="badge bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항' }}</span>
        <!-- <h5 class="card-title" :class="classes.red">Card title</h5> -->
        <h5 class="card-title red mt-2">{{ title }}</h5>
        <p class="card-text">{{ contents }}</p>
        <a v-if="isLike" href="#" class="btn btn-danger">Go somewhere</a>
        <a v-else href="#" class="btn btn-outline-danger">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ['title', 'contents'],
  // 위에 코드를 객체 타입으로 선언해보기
  props: {
    type: {
      type: String,
      default: 'news',
      
    },
    title: {
      type: String,
      required: true
    },
    contents: {
      type: String,
      required: true
    },
    isLike: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {}
  }
}
</script>
<style scoped>
.red {
  color: red;
}
</style>
<!-- <style module="classes">
.red {
  color: red;
}
</style> -->
