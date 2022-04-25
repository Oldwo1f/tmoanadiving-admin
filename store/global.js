

export const state = () => ({
	menuCollapsed: true,
	alertText: 'Test Alert',
	alertVariant: 'info',
	alertCountDown: '0',
})

export const getters = {
	getMenuCollapsed(state) {

		return state.menuCollapsed;
	}
}

export const mutations = {
	toogleMenuCollapsed(state) {
		console.log('STORE Mutation');
		state.menuCollapsed = !state.menuCollapsed;
		console.log('state.menuCollapsed ', state.menuCollapsed);
	},
	setAlertText(state, payload) {
		console.log('STORE Mutation: setAlertText');
		state.alertText = payload;
	},
	setAlertVariant(state, payload) {
		console.log('STORE Mutation: setAlertVariant');
		state.alertVariant = payload;
	},
	setAlertCountDown(state, payload) {
		console.log('STORE Mutation: setAlertCountDown');
		state.alertCountDown = payload;
	}
}


export const actions = {
	toogleMenuCollapsed(state) {

		console.log('STORE ACTION');
		state.commit('toogleMenuCollapsed')
	},
	alert(state, payload) {

		console.log('STORE ACTION');
		state.commit('setAlertText', payload.text)
		state.commit('setAlertVariant', payload.variant)
		state.commit('setAlertCountDown', payload.countDown)
	}
}