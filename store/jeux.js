const axios = require('axios').default;

export const state = () => ({
	jeux: [],
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
	currentJeu: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.jeux.length);
		state.rows = state.jeux.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.jeux.length);
		state.totalRows = state.jeux.length;
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
	setJeux(state, payload) {
		console.log('setJeux', payload);
		state.jeux = payload;
	},
	setCurentJeu(state, payload) {
		console.log('setCurentJeu', payload);
		state.currentJeu = payload;
	},
	setCurentJeuImages(state, payload) {
		console.log('setCurentJeuImages', payload);
		state.currentJeu.images = payload;
	},
	setCurentJeuImagesGagnant(state, payload) {
		console.log('setCurentJeuImagesGagnant', payload);
		state.currentJeu.imagesgagnant = payload;
	},
	setCurentJeuImagesFin(state, payload) {
		console.log('setCurentJeuImagesFin', payload);
		state.currentJeu.imagesfin = payload;
	},
	setCurentJeuLogos(state, payload) {
		console.log('setCurentJeuLogos', payload);
		state.currentJeu.logos = payload;
	},
	setCurentJeuLogosPush(state, payload) {
		console.log('setCurentJeuLogos', payload);
		state.currentJeu.logos.push(payload);
	},
	setCurentJeuImagesPush(state, payload) {
		console.log('setCurentJeuimages', payload);
		state.currentJeu.images.push(payload);
	},
	setCurentJeuImagesFinPush(state, payload) {
		console.log('setCurentJeuimagesFin', payload);
		state.currentJeu.imagesfin.push(payload);
	},
	setCurentJeuImagesGagnantPush(state, payload) {
		console.log('setCurentJeuimagesGagnant', payload);
		state.currentJeu.imagesgagnant.push(payload);
	},

	setCurentGagnant(state, payload) {
		console.log('setCurentGagnant', payload);
		state.currentJeu.winnerlastname = payload.lastName;
		state.currentJeu.winnerfirstname = payload.firstName;
		state.currentJeu.winneremail = payload.email;
		state.currentJeu.winnercity = payload.city;

		console.log(state.currentJeu);
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
	async fetchJeux(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const jeux = await axios.get(process.env.API_URL + 'jeux?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setJeux', jeux.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchJeu(state, payload) {
		console.log('mypayload', payload);
		const jeu = await axios.get(process.env.API_URL + 'jeu/' + payload.id)

		console.log('STORE ACTION setCurentJeu');
		state.commit('setCurentJeu', jeu.data)
	},
	async updateCurrentJeu(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		const jeu = { ...state.state.currentJeu };
		jeu[payload.key] = payload.val
		console.log('jeu', jeu);
		const edit = await axios.patch(process.env.API_URL + 'jeu/' + jeu.id, { datas: jeu }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const jeux = [...state.state.jeux];
				console.log('jeux', jeux);
				var index = _.findIndex(jeux, { id: rep.data.id });
				console.log('index=', index);
				jeux.splice(index, 1, rep.data);
				state.commit('setJeux', jeux)

				state.commit('setCurentJeu', rep.data)

				state.dispatch('global/alert', {
					text: 'Jeu enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneJeu(state, payload) {
		console.log('mypayload removeOneJeu', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete(process.env.API_URL + 'jeu/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const jeux = [...state.state.jeux];
				console.log('jeux', jeux);
				var index = _.findIndex(jeux, { id: rep.data });
				console.log('index=', index);
				jeux.splice(index, 1);
				state.commit('setJeux', jeux)
				state.commit('setCurentJeu', {})

				state.dispatch('global/alert', {
					text: 'Jeu supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateJeuStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Jeu archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Jeu désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Jeu activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Jeu désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch(process.env.API_URL + 'jeu/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const jeux = [...state.state.jeux];
				console.log('jeux', jeux);
				var index = _.findIndex(jeux, { id: rep.data.id });
				console.log('index=', index);
				jeux.splice(index, 1, rep.data);
				state.commit('setJeux', jeux)
				// state.commit('setCurentJeu', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateLogo(state, payload) {
		console.log('updateLogo===>>>><', payload);


		state.commit('setCurentJeuLogosPush', payload)


	},
	async updateImage(state, payload) {
		console.log('updateImage===>>>><', payload);


		state.commit('setCurentJeuImagesPush', payload)


	},
	async updateImagesFin(state, payload) {
		console.log('updateImageFin===>>>><', payload);


		state.commit('setCurentJeuImagesFinPush', payload)


	},
	async updateImagesGagnant(state, payload) {
		console.log('updateImageGagnant===>>>><', payload);


		state.commit('setCurentJeuImagesGagnantPush', payload)


	},

	async createJeu(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createJeu', payload);
		return await axios.post(process.env.API_URL + 'jeu', payload.value).then(function (rep) {
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
					text: 'Jeu ajouté',
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
						text: 'Le nom du jeu doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du jeu doit être unique' };

				}
			}
		)
	},

	async tirage(state, payload) {
		console.log('mypayload tirage', payload);
		console.log(state);
		const jeu = { ...state.state.currentJeu };
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const result = await axios.get(process.env.API_URL + 'jeu/tirage/' + jeu.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				state.commit('setCurentGagnant', rep.data)

				state.dispatch('global/alert', {
					text: 'Tirage au sort effectué',
					variant: 'success',
					countDown: 5
				}, { root: true })

			}
		})

		return result
	},
	async removeOneImage(state, payload) {
		console.log('mypayload removeOneImage', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentJeu.images);
				const imageList = [...state.state.currentJeu.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentJeuImages', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneImageFin(state, payload) {
		console.log('mypayload removeOneImageFin', payload);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentJeu.imagesfin);
				const imageList = [...state.state.currentJeu.imagesfin];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentJeuImagesFin', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneImageGagnant(state, payload) {
		console.log('mypayload removeOneImageGagnant', payload);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentJeu.imagesgagnant);
				const imageList = [...state.state.currentJeu.imagesgagnant];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentJeuImagesGagnant', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneLogo(state, payload) {
		console.log('mypayload removeOneLogo', payload);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentJeu.images);
				const imageList = [...state.state.currentJeu.logos];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentJeuLogos', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
}