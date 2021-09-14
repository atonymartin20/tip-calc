<template>
    <div class='main-container'>
        <left-side />
        <right-side />
    </div>
</template>

<script>
    import LeftSide from '../leftSide/leftSide.vue';
    import RightSide from '../rightSide/rightSide.vue';

    export default {
        name: 'MainContainer',
        components: { LeftSide, RightSide }
    }
</script>

<style scoped>
    .main-container {
        width: 100%;
        max-width: 920px;
        height: 481px;
        display: flex;
        background: #FFFFFF;
        box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
        border-radius: 25px;
        margin-bottom: 78px;
        padding: 32px 32px 32px 48px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
    }
</style>
