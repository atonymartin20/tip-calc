<template>
	<div class='tip-container'>
		<h3>Select Tip %</h3>

        <div class='tip-amounts-container'>
			<button v-for='tip in tipAmounts' v-bind:key='tip' :tip='tip' class='tip-button' :class='[activeTip === tip ? activeButton : null]' v-on:click='changeActiveTip(tip, $event)'>{{ tip }}%</button>

			<span class='input-holder'><input type='number' :value='this.$store.state.customTipAmount' @input="update" placeholder='Custom' /></span>
        </div>
    </div>
</template>

<script>

	export default {
		name: 'selectTip',
		data () {
			return {
				tipAmounts: [5, 10, 15, 25, 50],
				activeTip: this.$store.state.activeTipPercent,
				activeButton: 'active-button',

			}
		},
		methods: {
			changeActiveTip: function (value, event) {
				if (event) {
					event.preventDefault()
				}
				this.activeTip = value
				this.$store.commit('UPDATE_TIP_PERCENTAGE', Number(value))
				this.$store.commit('UPDATE_TOTAL_SECTION')
			},
			update: (function(event) {
				this.customTipAmount = Number(event.target.value)
				this.input = event.target.value;
				this.$store.commit('UPDATE_CUSTOM_TIP_PERCENTAGE', Number(this.customTipAmount))
				this.changeActiveTip(this.customTipAmount)
				return {
					customTipAmount: this.input
				}
			})
		}
	}
</script>

<style scoped>
    .tip-container {
        width: 100%;
        max-width: 379px;
        height: 152px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .tip-amounts-container {
        width: 100%;
        max-width: 379px;
        height: 112px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

	h3 {
		height: 24px;
		font-style: normal;
		font-weight: 700;
		font-size: 1.6rem;
		line-height: 24px;
		color: #5E7A7D;
		margin: 0px;
	}

	.tip-button {
		width: 117px;
		height: 48px;
		background: #00474B;
		border-radius: 5px;
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: 700;
		font-size: 2.4rem;
		line-height: 36px;
		text-align: center;
		color: #FFFFFF;
		border: none;
		cursor: pointer;
	}

	.tip-button:active {
		background: #26C2AE;
		color: #00474B;
	}

	.tip-button:hover {
		background: #9FE8DF;
		color: #00474B;
	}

	.active-button {
		width: 117px;
		height: 48px;
		background: #26C2AE;
		border-radius: 5px;
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: 700;
		font-size: 2.4rem;
		line-height: 36px;
		text-align: center;
		color: #00474B;
		border: none;
		cursor: pointer;
	}

	.input-holder {
		width: 118px;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}

	input {
		width: 100%;
		height: 100%;
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: bold;
		font-size: 2.4rem;
		line-height: 36px;
		text-align: right;
		color: #00474B;
		padding-right: 8px;
		background: #F3F9FA;
		border: 1px solid #F3F9FA;
		border-radius: 5px;
		cursor: pointer;
	}

	input::placeholder {
		text-align: center;
		color: #547878;
		padding-left: 8px;
	}

	input:hover, input:focus, input:active {
		border: 2px solid #26C2AE;
		box-sizing: border-box;
		border-radius: 5px;
		caret-color: #26C2AE;
		outline: none;
	}

	@media (max-width: 755px) {
		.tip-container {
			max-width: 350px;
		}

		.tip-button {
			width: 100px;
		}

		.active-button {
			width: 100px;
		}

		.input-holder {
			width: 100px;
		}

		input::placeholder {
			padding-left: 0px;
		}
    }

	@media (max-width: 720px) {
		.tip-container {
			max-width: 720px;
			height: 216px;
		}

		.tip-amounts-container {
			max-width: 720px;
			height: 176px;
		}

		.tip-button {
			width: 146.63px;
		}

		.active-button {
			width: 146.63px;
		}

		.input-holder {
			width: 146.63px;
		}

		input::placeholder {
			padding-left: 8px;
		}
	}

	@media (max-width: 365px) {
		.tip-button {
			width: 130px;
		}

		.active-button {
			width: 130px;
		}

		.input-holder {
			width: 130px;
		}
	}

	@media (max-width: 335px) {
		.tip-button {
			width: 120px;
		}

		.active-button {
			width: 120px;
		}

		.input-holder {
			width: 120px;
		}
	}
</style>