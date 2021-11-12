<template>
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 1
            }
        },
        methods: {
            minus() {
                if (this.quantity != 1) 
                    this.quantity--;
            },
            plus() {
                this.quantity++;
            }
        }
    }
</script>

<style scoped>

</style>