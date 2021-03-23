import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		form: {
			action: null,
			entity: null
		}
	},
	mutations: {
		updateHowHelpFormValues(state, {entity,action}) {
			state.form.entity = entity;
			state.form.action = action;
		}
	}
});
