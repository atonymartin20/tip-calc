import Vue from 'vue'

export default {
	UPDATE_BILL_TOTAL: (state, value) => {
		state.billTotal = value
	},
	UPDATE_CUSTOM_TIP_PERCENTAGE: (state, value) => {
		state.customTipAmount = value
	},
	UPDATE_TIP_PERCENTAGE: (state, value) => {
		state.tipAmount = value
		state.activeTip = value
	},
	UPDATE_NUMBER_OF_PEOPLE: (state, value) => {
		state.numberOfPeople = value
	},
	UPDATE_TOTAL_SECTION: (state) => {
		if (state.numberOfPeople > 0 && state.billTotal > 0 && state.tipAmount !== null ) {
			let shrinkTip = state.tipAmount / 100
			let billAmount = (1 + shrinkTip) * state.billTotal
			let TotalTipAmount = shrinkTip * state.billTotal
			let tipPerPerson = Number(TotalTipAmount / state.numberOfPeople)
			let totalPerPerson = Number(billAmount / state.numberOfPeople)
			state.tipPerPerson = tipPerPerson
			state.totalPerPerson = totalPerPerson
		}

		else {
			state.tipPerPerson = 0
			state.totalPerPerson = 0
		}
	},
	TOTAL_RESET: (state) => {
		state.activeTip = 0
		state.billTotal = null
		state.customTipAmount = null
		state.tipAmount = null
		state.numberOfPeople = null
		state.tipPerPerson = 0.00
		state.totalPerPerson = 0.00
	}
}