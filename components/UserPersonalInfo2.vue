<template>
	<div class="masonryBlock">
		<div class="card">
			<div class="card-body">

				<h4 class="card-title">Informations 2 ème plongeur</h4>

				<InstantField label="Prénom" rules="required|alpha_spaces|min:2" placeholder="Prénom" name="firstName2"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Nom" rules="required|alpha_spaces|min:2" placeholder="Nom" name="lastName2"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Date de naissance" rules="max:25|birthdate" placeholder="JJ/MM/AAAA"
					name="birthDate2" storename="users" storeproperty="currentUser"
					updateStoreAction="updateCurrentUser" />
				<!-- <InstantField label="Email" rules="required|email"  placeholder="Email" name="emailAddress2" storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" /> -->
				<InstantField label="Téléphone" rules="required|min:8|max:12" placeholder="Téléphone" name="phone2"
					storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
				<InstantField label="Localisation" rules="max:25" placeholder="Pays" name="country2" storename="users"
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
const model = ref()

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