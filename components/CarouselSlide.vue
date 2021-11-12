<template>
    <div v-show="visibleSlide === index" class="carousel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['visibleSlide', 'index']
    }
</script>

<style scoped>

</style>