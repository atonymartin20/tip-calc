import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations.js'

Vue.use(Vuex);

export function createStore() {
  	return new Vuex.Store({
    	state: {
			activeTipPercent: 0,
			billTotal: null,
			customTipAmount: null,
			tipAmount: null,
			numberOfPeople: null,
			tipPerPerson: 0.00,
			totalPerPerson: 0.00
    	},
		mutations,
 	});
}
