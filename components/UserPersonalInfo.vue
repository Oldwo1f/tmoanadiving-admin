<template>
	<div class="masonryBlock">
		<div class="card">
			<div class="card-body">

				<h4 class="card-title">Informations personnelles ({{ model.idclient }})</h4>

				<InstantField label="Email" rules="required|email" placeholder="Email" name="emailAddress"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Prénom" rules="required|alpha_spaces|min:2" placeholder="Prénom" name="firstName"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Nom" rules="required|alpha_spaces|min:2" placeholder="Nom" name="lastName"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Date de naissance" rules="max:25|birthdate" placeholder="JJ/MM/AAAA"
					name="birthDate" storename="users" storeproperty="currentUser"
					updateStoreAction="updateCurrentUser" />
				<InstantField label="Téléphone" rules="required|min:8|max:12" placeholder="Téléphone" name="phone"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Localisation" rules="max:25" placeholder="Pays" name="country" storename="users"
					storeproperty="currentUser" updateStoreAction="updateCurrentUser" />

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
// const model = ref()
// const { $store } = useNuxtApp()
// const state = $store.state;
// // const { $store } = useNuxtApp()
// // const emit = defineEmits()  
// // const collapsed = ref(false);




let model = ref()
watchEffect(() => { console.log('watchEffectherehere------------>'); model.value = state['users']['currentUser']; console.log(model.value); })

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

.min-width {
	width: 40%;
}
</style>