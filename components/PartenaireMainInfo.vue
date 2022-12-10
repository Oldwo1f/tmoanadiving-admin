<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<!-- <h4 class="card-title">Informations</h4> -->
			<InstantRadioPartenaire :options="[{ text: 'Club', value: 'club'},{ text: 'Agence', value: 'agency'}]" name="type" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Login" rules="required|alpha_num|min:2"  placeholder="Login du partenaire" name="login" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Nom" rules="required|alpha_spaces|min:2"  placeholder="Nom du partenaire" name="name" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Email" rules="required|email"  placeholder="Email" name="email" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Téléphone" rules="required|min:8|max:12"  placeholder="Téléphone" name="phone" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Mobile" rules="required|min:8|max:12"  placeholder="Téléphone mobile" name="phoneM" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Site web" rules="required"  placeholder="http://www.example.pf" name="website" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Ile" rules="required"  placeholder="Ile" name="island" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Ville" rules="required"  placeholder="Ville" name="city" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Latitude" rules="required"  placeholder="Latitude" name="lat" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Longitude" rules="required"  placeholder="Longitude" name="lng" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<!-- <InstantField  label="Date de lancement" rules="max:25|birthdate"  placeholder="JJ/MM/AAAA" name="dateLancement" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" /> -->
			<!-- <InstantDatePicker  label="Date de lancement" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateLancement" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantDatePicker  label="Date de cloture" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateCloture" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantDatePicker  label="Date de tirage" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateTirage" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Huissier" rules=""  placeholder="Huissier" name="huissiertext" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Url règlement" rules="required"  placeholder="Url règlement" name="urlReglement" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" /> -->
			<!--<InstantField label="Téléphone" rules="required|min:8|max:12"  placeholder="Téléphone" name="phone" storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
			<InstantField label="Localisation" rules="max:25"  placeholder="Ville" name="city" storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
			 -->
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