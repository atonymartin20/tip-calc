<template>
	<div class='bill'>
		<div class='top-portion-bill'>
			<h3>Bill</h3>
			<h3 class='hide-error-text' :class='[this.$store.state.billTotal === 0 ? errorText : null]' >Can't be zero</h3>
		</div>
		<div class='fake-input' :class='[this.$store.state.billTotal === 0 ? errorTextInput : null]'>
			<img src="../../assets/icon-dollar.svg">
			<input type='number' :value='this.$store.state.billTotal' @input="update" placeholder='0' :class='[this.$store.state.billTotal === 0 ? inputError : null]' /> 
		</div>
    </div>
</template>

<script>
	export default {
		name: 'bill',
		data () {
			return {
				errorText: 'error-text',
				errorTextInput: 'fake-input-error',
				inputError: 'input-error'
			}
		},
		methods: {
			update: (function(event) {
				this.billTotal = Number(event.target.value)
				this.input = event.target.value;
				this.$store.commit('UPDATE_BILL_TOTAL', Number(this.input))
				this.$store.commit('UPDATE_TOTAL_SECTION')
				return {
					billTotal: this.input
				}
			})
		}
	}
</script>

<style scoped>
    .bill {
		width: 100%;
		height: 78px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
    }

	.top-portion-bill {
		width: 100%;
		display: flex;
		justify-content: space-between;
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

	.fake-input {
		width: 100%;
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #F3F9FA;
		border-radius: 5px;
		cursor: pointer;
	}

	.fake-input-error {
		width: 100%;
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #F3F9FA;
		border-radius: 5px;
		cursor: pointer;
	}

	.fake-input img {
		margin-left: 19.26px;
	}

	input {
		background: #F3F9FA;
		width: 100%;
		height: 48px;
		border: none;
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: 700;
		font-size: 2.4rem;
		line-height: 36px;
		text-align: right;
		color: #00474B;
		padding-right: 17px;
		cursor: pointer;
		caret-color: #26C2AE;
	}

	.input-error {
		caret-color: #E17457;
	}

	input::placeholder {
		mix-blend-mode: normal;
		opacity: 0.55;
	}

	.fake-input:hover {
		border: 2px solid #26C2AE;
		box-sizing: border-box;
		border-radius: 5px;
		outline: none;
	}

	.fake-input-error:hover {
		border: 2px solid #E17457;
		box-sizing: border-box;
		border-radius: 5px;
		outline: none;
	}

	input:hover {
		border-top: 2px solid #26C2AE;
		border-bottom: 2px solid #26C2AE;
		box-sizing: border-box;
		caret-color: #26C2AE;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		outline: none;
	}

	.input-error:hover {
		border-top: 2px solid #E17457;
		border-bottom: 2px solid #E17457;
		box-sizing: border-box;
		caret-color: #E17457;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		outline: none;
	}

	input:focus, input:active {
		outline: none;
	}

	.hide-error-text {
		display: none;
	}

	.error-text {
		display: flex;
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: bold;
		font-size: 1.6rem;
		line-height: 24px;
		text-align: right;
		color: #E17457;
	}
</style>