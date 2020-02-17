<template>
    <div>
        Poster1
    </div>
</template>

<script>
    export default {
        name: 'Poster',
        beforeCreate() {
            const deliveryAsn = this.$route.query;
            console.log(deliveryAsn);
        }
    };
</script>

<style lang="scss" scoped>

</style>
