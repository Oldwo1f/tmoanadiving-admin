<template>
	<div class="col-12">
		<div class="card" v-if="user">
			<div class="card-body userHead">
				<div class="left">
					<nuxt-link to="/users">
						<span class="material-icons">
							arrow_back_ios
						</span>
					</nuxt-link>
					<avatar :username="user.firstName + ' ' + user.lastName" inline></avatar>
					<h3 class="card-title ml-2"> {{ user.firstName }} {{ user.lastName }} </h3>

					<span class="material-icons copyIcon" title="Copier l'id" @click="copyId">
						content_copy
					</span>
					<InstantRadioResident style="margin-left:30px;"
						:options="[{ text: 'Résident', value: true }, { text: 'International', value: false }]"
						name="resident" storename="users" storeproperty="currentUser"
						updateStoreAction="updateCurrentUser" />
				</div>
				<div class="right">

					<InstantRadio
						:options="[{ text: 'Actif', value: 'actif' }, { text: 'Brouillon', value: 'draft' }, { text: 'Inactif', value: 'inactif' }, { text: 'Archive', value: 'archive' }]"
						name="status" storename="users" storeproperty="currentUser"
						updateStoreAction="updateCurrentUser" />

					<!-- <RemoveBtn storename="users" :valueId="user.id" storeAction="removeOneUser" redirectPath="users"/> -->
				</div>





			</div>
		</div>
	</div>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate';
import Avatar from 'vue-avatar'

const { $store } = useNuxtApp()
const state = $store.state;
// const { $store } = useNuxtApp()
// const emit = defineEmits()  
// const collapsed = ref(false);

let user = ref()
watchEffect(() => { console.log('watchEffect'); user.value = state.users.currentUser; })


const copyId = function () {
	console.log('navigator:', navigator);
	console.log('navigator.clipboard:', navigator.clipboard);

	navigator.clipboard.writeText(user.value.id);
	$store.dispatch('global/alert', {
		text: 'ID de l\'utilisateur copié',
		variant: 'success',
		countDown: 3
	}, { root: true })
}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.userHead {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}

.left {
	display: flex;
	align-items: center;
	height: 40px;
	// background: olive;

	h3 {
		margin-bottom: 0;
		font-weight: bold;
	}

	a {
		color: grey;
		margin-right: 1rem;
		margin-bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;

		.material-icons {
			width: 15px;
			font-size: 40px;

		}

		&:hover {
			color: rgb(51, 51, 51);
		}
	}

	.copyIcon {
		font-size: 14px;
		margin-left: 5px;
		margin-top: 5px;
		cursor: pointer;
	}
}

.right {
	display: flex;
	align-items: center;
	// background:teal;
	align-self: flex-end;
	height: 40px;
}
</style>