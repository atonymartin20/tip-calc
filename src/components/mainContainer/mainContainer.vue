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

    @media (max-width: 875px) {
        .main-container {
            padding: 32px 10px 32px 10px;
        }
    }

    @media (max-width: 720px) {
        .main-container {
            flex-direction: column;
            height: 789px;
            margin-bottom: 0px;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
            padding: 32px 24px 32px 24px;
        }
	}
</style>
