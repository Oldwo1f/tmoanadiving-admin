const axios = require('axios').default;

export const state = () => ({
	passes: [],
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
	currentPass: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.passes.length);
		state.rows = state.passes.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.passes.length);
		state.totalRows = state.passes.length;
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
		// state.rows = state.jeux.length
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
	setPasses(state, payload) {
		console.log('setPasses', payload);
		state.passes = payload;
	},
	setCurentPass(state, payload) {
		console.log('setCurentPass!!', payload);
		state.currentPass = payload;
	},
	setCurentPassImages(state, payload) {
		console.log('setCurentPassImages', payload);
		state.currentPass.images = payload;
	},
	setCurentPassLogos(state, payload) {
		console.log('setCurentPassLogos', payload);
		state.currentPass.logos = payload;
	},
	setCurentPassLogosPush(state, payload) {
		console.log('setCurentPassLogos', payload);
		state.currentPass.logos.push(payload);
	},
	setCurentPassImagesPush(state, payload) {
		console.log('setCurentPassimages', payload);
		state.currentPass.images.push(payload);
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
	async fetchPasses(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const passes = await axios.get(process.env.API_URL + 'pass?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setPasses', passes.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchPass(state, payload) {
		console.log('mypayload', payload);
		const pass = await axios.get(process.env.API_URL + 'pass/' + payload.id)

		console.log('STORE ACTION setCurentPass');
		state.commit('setCurentPass', pass.data)
	},
	async updateCurrentPass(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentPass);
		const pass = { ...state.state.currentPass };
		pass[payload.key] = payload.val
		console.log('pass', pass);
		const edit = await axios.patch(process.env.API_URL + 'pass/' + pass.id, { datas: pass }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const passes = [...state.state.passes];
				console.log('passes', passes);
				var index = _.findIndex(passes, { id: rep.data.id });
				console.log('index=', index);
				passes.splice(index, 1, rep.data);
				state.commit('setPasses', passes)
				state.commit('setCurentPass', rep.data)

				state.dispatch('global/alert', {
					text: 'Pass enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOnePass(state, payload) {
		console.log('mypayload removeOnePass', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete(process.env.API_URL + 'pass/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const passes = [...state.state.passes];
				console.log('passes', passes);
				var index = _.findIndex(passes, { id: rep.data });
				console.log('index=', index);
				passes.splice(index, 1);
				state.commit('setPasses', passes)
				state.commit('setCurentPass', {})

				state.dispatch('global/alert', {
					text: 'Pass supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updatePassStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Pass archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'actif';
				responseValue = 'Pass désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Pass activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Pass désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch(process.env.API_URL + 'pass/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const passes = [...state.state.passes];
				console.log('passes', passes);
				var index = _.findIndex(passes, { id: rep.data.id });
				console.log('index=', index);
				passes.splice(index, 1, rep.data);
				state.commit('setPasses', passes)
				// state.commit('setCurentPass', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},

	async createPass(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createPass', payload);
		return await axios.post(process.env.API_URL + 'pass', payload.value).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				// const jeux = [...state.state.jeux];
				// console.log('jeux', jeux);
				// var index = _.findIndex(jeux, { id: rep.data.id });
				// console.log('index=', index);
				// jeux.splice(index, 1, rep.data);
				// state.commit('setJeus', jeux)
				// state.commit('setCurentJeu', rep.data)

				state.dispatch('global/alert', {
					text: 'Pass ajouté',
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
						text: 'Le nom du pass doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du pass doit être unique' };

				}
			}
		)
	},

	async deleteOneImage(state, payload) {
		console.log('mypayload removeOneImage', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentPass.images);
				const imageList = [...state.state.currentPass.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPassImages', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async deleteOneLogo(state, payload) {
		console.log('mypayload removeOneLogo', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentPass.logos);
				const imageList = [...state.state.currentPass.logos];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPassLogos', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateLogo(state, payload) {
		console.log('updateLogo===>>>><', payload);


		state.commit('setCurentPassLogosPush', payload)


	},
	async updateImage(state, payload) {
		console.log('updateImage===>>>><', payload);


		state.commit('setCurentPassImagesPush', payload)


	},
}