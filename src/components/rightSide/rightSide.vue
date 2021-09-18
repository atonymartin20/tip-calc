<template>
	<div class='right-side'>
        <div class='tip-amount-div'>
            <div class='left-side-div'>
                <h3>Tip Amount</h3>
                <p>/ person</p>
            </div>

            <h1>${{ this.$store.state.tipPerPerson.toFixed(2) }}</h1>
        </div>

        <div class='tip-total-div'>
            <div class='left-side-div'>
                <h3>Total</h3>
                <p>/ person</p>
            </div>

            <h1>${{ this.$store.state.totalPerPerson.toFixed(2) }}</h1>
        </div>


        <button v-on:click='totalReset($event)' :disabled='this.$store.state.totalPerPerson === 0.00'>RESET</button>
    </div>
</template>

<script>
	export default {
		name: 'rightSide',
		methods: {
			totalReset: (function(event) {
                if (event) {
					event.preventDefault()
				}
				this.$store.commit('TOTAL_RESET')
			})
		}
	}

</script>

<style scoped>
    .right-side {
        width: 100%;
        box-sizing: border-box;
        max-width: 413px;
        height: 417px;
        background: #00474B;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 40px;
    }

    .tip-amount-div {
        width: 100%;
        height: 71px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    .tip-total-div {
        width: 100%;
        height: 71px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: auto;
    }

    .left-side-div {
        display: flex;
        flex-direction: column;
        height: 44px;
    }

    .left-side-div h3 {
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 24px;
        color: #FFFFFF;
        margin: 0px;
        text-align: left;
    }

    .left-side-div p {
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: bold;
        font-size: 1.3rem;
        line-height: 19px;
        color: #7F9D9F;
        margin: 0px;
        text-align: left;
    }

    h1 {
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 71px;
        text-align: right;
        letter-spacing: -1px;
        color: #26C2AE;
    }

    button {
        width: 100%;
        height: 48px;
        background: #26C2AE;
        border-radius: 5px;
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: bold;
        font-size: 2.0rem;
        line-height: 30px;
        text-align: center;
        color: #00474B;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background: #9FE8DF;
    }

    button:disabled {
        background: #0D686D;
        color: rgba(0,71,75,0.35)
    }
</style>