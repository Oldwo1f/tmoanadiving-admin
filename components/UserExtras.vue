<template>
	<div class="masonryBlock">
		<b-modal id="modalResetPassord" header-bg-variant="danger" @ok="modalConfirmed" header-text-variant="white"
			centered size="sm" title="Êtes vous sûr ?" ok-title="Oui. Je suis sûr" ok-variant="success"
			cancel-title="Annuler" cancel-variant="danger">
			<p style="text-align:center;margin-bottom:0px;">De vouloir réinitialiser le mot de passe de l'utilisateur ?
			</p>
		</b-modal>
		<div class="card">
			<div class="card-body">

				<h4 class="card-title">Paramètres de compte</h4>

				<div><label for="">Role : </label><span> {{ role }}</span></div>
				<!-- <div><label for="">Statut email: </label><span> {{emailStatus}}</span></div> -->
				<div><label for="">Password: </label> <a v-b-modal.modalResetPassord> Effectuer un reset de mot de
						passe</a></div>

			</div>
		</div>
	</div>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate';
const { $store } = useNuxtApp()
const state = $store.state;
// const { $store } = useNuxtApp()
// const emit = defineEmits()  
// const collapsed = ref(false);
const model = ref()
// const name = state.users.currentPage;

const modalConfirmed = async function (val) {
	console.log('RESETPASSWORD USER');
	console.log('id=', id.value);
	//   console.log('idToRemove',idToRemove);
	const result = await $store.dispatch('users/resetPassword', { id: id.value }).then(async function (t) {
		console.log('AFTER RESET');
	})
}


const role = computed({
	get: () => state.users.currentUser.role,
	set: (val) => { console.log('setVal', val); },
})
const id = computed({
	get: () => state.users.currentUser.id,
	set: (val) => { console.log('setVal', val); },
})
const emailStatus = computed({
	get: () => state.users.currentUser.emailStatus,
	set: (val) => { console.log('setVal', val); },
})


const update = function (e) {

	console.log('UPDATE');
	console.log('e', e);

}
const emitEvent = function (e) {

	console.log('emitEvent');
	console.log('e', e);

}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';
</style>