const axios = require('axios').default;

export const state = () => ({
	admins: [],
	currentPage: 1,
	perPage: 25,
	totalRows: 1,
	filterOn: [],
	sortBy: 1,
	pageOptions: [10, 25, 50, 100],
	filter: null,
	sortBy: 'age',
	sortDesc: false,
	rows: 1,
	isBusy: false,
	currentAdmin: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.admins.length);
		state.rows = state.admins.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.admins.length);
		state.totalRows = state.admins.length;
	},
	setSortBy(state, payload) {
		console.log('SETSORTBY', payload);
		state.sortBy = payload;
		// state.commit('setRows')
	},
	setSortDesc(state, payload) {
		state.sortDesc = payload;
	},
	setCurrentPage(state, payload) {
		state.currentPage = payload;
	},
	setPerPage(state, payload) {
		console.log('setPerPage', payload);
		state.perPage = payload;
	},
	setFilter(state, payload) {
		console.log('setFilter', payload);
		state.filter = payload;
		// state.rows = state.users.length
		// console.log('state.rows=', state.rows);
	},
	setFilterOn(state, payload) {
		console.log('setFilterOn', payload);
		state.filterOn = payload;
	},
	setTotalRows(state, payload) {
		console.log('setTtotalRows', payload);
		state.totalRows = payload;
	},
	setAdmins(state, payload) {
		console.log('setAdmins', payload);
		state.admins = payload;
	},
	setCurentAdmin(state, payload) {
		console.log('setCurentAdmin', payload);
		state.currentAdmin = payload;
	},
	setIsBusy(state, payload) {
		console.log('setIsBusy', payload);
		state.isBusy = payload;
	},

}


export const actions = {
	// toogleMenuCollapsed(state) {

	// 	console.log('STORE ACTION');
	// 	state.commit('toogleMenuCollapsed')
	// },
	async fetchAdmins(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const admins = await axios.get('http://localhost:1337/api/v1/administrator?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setAdmins', admins.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchAdmin(state, payload) {
		console.log('mypayload', payload);
		const user = await axios.get('http://localhost:1337/api/v1/user/' + payload.id)

		console.log('STORE ACTION setCurentAdmin');
		state.commit('setCurentAdmin', user.data)
	},
	async updateCurrentAdmin(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		const user = { ...state.state.currentAdmin };
		user[payload.key] = payload.val
		console.log('user', user);
		const edit = await axios.patch('http://localhost:1337/api/v1/administrator/' + user.id, { datas: user }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const users = [...state.state.admins];
				console.log('users', users);
				var index = _.findIndex(users, { id: rep.data.id });
				console.log('index=', index);
				users.splice(index, 1, rep.data);
				state.commit('setAdmins', users)
				state.commit('setCurentAdmin', rep.data)

				state.dispatch('global/alert', {
					text: 'Administrateur enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneUser(state, payload) {
		console.log('mypayload removeOneUser', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete('http://localhost:1337/api/v1/user/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const users = [...state.state.users];
				console.log('users', users);
				var index = _.findIndex(users, { id: rep.data });
				console.log('index=', index);
				users.splice(index, 1);
				state.commit('setUsers', users)
				state.commit('setCurentUser', {})

				state.dispatch('global/alert', {
					text: 'Utilisateur supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateAdminStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Administrateur archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Administrateur désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Administrateur activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Administrateur désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch('http://localhost:1337/api/v1/administrator/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const users = [...state.state.admins];
				console.log('users', users);
				var index = _.findIndex(users, { id: rep.data.id });
				console.log('index=', index);
				users.splice(index, 1, rep.data);
				state.commit('setAdmins', users)
				// state.commit('setCurentUser', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async resetPassword(state, payload) {
		console.log('mypayload resetPassword', payload);
		const edit = await axios.patch('http://localhost:1337/api/v1/administrator/resetPassword/' + payload.id, {}).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				// const users = [...state.state.users];
				// console.log('users', users);
				// var index = _.findIndex(users, { id: rep.data.id });
				// console.log('index=', index);
				// users.splice(index, 1, rep.data);
				// state.commit('setUsers', users)
				// state.commit('setCurentUser', rep.data)

				state.dispatch('global/alert', {
					text: 'Password réinitialisé et envoyé par email',
					variant: 'success',
					countDown: 4
				}, { root: true })
			}
		})
	},
	async createUser(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createUser', payload);
		return await axios.post('http://localhost:1337/api/v1/administrator', payload.value).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				// const users = [...state.state.users];
				// console.log('users', users);
				// var index = _.findIndex(users, { id: rep.data.id });
				// console.log('index=', index);
				// users.splice(index, 1, rep.data);
				// state.commit('setUsers', users)
				// state.commit('setCurentUser', rep.data)

				state.dispatch('global/alert', {
					text: 'Admin ajouté',
					variant: 'success',
					countDown: 2

				}, { root: true })

				console.log(' rep.data.id', rep.data.id);

				return { id: rep.data.id };
			}

		}).catch(
			function (err, v) {
				console.log(err);
				console.log(err.response);
				if (err.response.status === 409) {

					console.log('heyho');
					state.dispatch('global/alert', {
						text: 'Adresse email déjà utilisée',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Adresse email déjà utilisée' };

				}
			}
		)
	}
}