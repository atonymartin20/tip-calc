<template>
	<div class='left-side'>
        <bill />
        <selectTip />
        <numberOfPeople />
    </div>
</template>

<script>
    import Bill from '../bill/bill.vue';
    import SelectTip from '../selectTip/selectTip.vue';
    import NumberOfPeople from '../numberOfPeople/numberOfPeople.vue';

	export default {
		name: 'leftSide',
        components: { Bill, SelectTip, NumberOfPeople }
	}
</script>

<style scoped>
    .left-side {
        width: 100%;
        max-width: 379px;
        height: 388px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-between;
    }

    @media (max-width: 720px) {
        .left-side {
            max-width: 720px;
            padding: 0px 8px;
            height: 436px;
        }
    }
</style>