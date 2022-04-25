<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Informations personnelles</h4>
			
			<InstantField label="Prénom" rules="required|alpha_spaces|min:2" placeholder="Prénom" name="firstName" storename="administrators" storeproperty="currentAdmin" updateStoreAction="updateCurrentAdmin"/>
			<InstantField label="Nom" rules="required|alpha_spaces|min:2"  placeholder="Nom" name="lastName" storename="administrators" storeproperty="currentAdmin" updateStoreAction="updateCurrentAdmin" />
			<InstantField  label="Date de naissance" rules="max:25|birthdate"  placeholder="JJ/MM/AAAA" name="birthDate" storename="administrators" storeproperty="currentAdmin" updateStoreAction="updateCurrentAdmin" />
			<InstantField label="Email" rules="required|email"  placeholder="Email" name="emailAddress" storename="administrators" storeproperty="currentAdmin" updateStoreAction="updateCurrentAdmin" />
			<InstantField label="Téléphone" rules="required|min:8|max:12"  placeholder="Téléphone" name="phone" storename="administrators" storeproperty="currentAdmin" updateStoreAction="updateCurrentAdmin" />
			<InstantField label="Localisation" rules="max:25"  placeholder="Ville" name="city" storename="administrators" storeproperty="currentAdmin" updateStoreAction="updateCurrentAdmin" />
			
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
const model=ref()

const update = function(e){

	console.log('UPDATE');
	console.log('e',e);
	
}
const emitEvent = function(e){

	console.log('emitEvent');
	console.log('e',e);
	
}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';


</style>