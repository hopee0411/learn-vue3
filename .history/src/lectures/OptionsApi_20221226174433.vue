<template>
    <div>
        <button @click="increment">Counter: {{ counter }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        increment() {
            this.counter++;
        },
    },
    mounted() {
        console.log('애플리케이션이 마운트 되었습니다!');
    },
};
</script>

<style lang="scss" scoped>

</style>