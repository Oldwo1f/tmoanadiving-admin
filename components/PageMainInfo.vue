<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<!-- <h4 class="card-title">Informations</h4> -->
			
			<InstantField label="Nom" rules="required|alpha_spaces|min:2"  placeholder="Nom de la page" name="name" storename="pages" storeproperty="currentPage" updateStoreAction="updateCurrentPage" />
			<InstantField label="Chemin" rules="required"  placeholder="Chemin-de-la-page" name="url" storename="pages" storeproperty="currentPage" updateStoreAction="updateCurrentPage" />
			<!-- <InstantField  label="Date de lancement" rules="max:25|birthdate"  placeholder="JJ/MM/AAAA" name="dateLancement" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" /> -->
			<!-- <InstantDatePicker  label="Date de lancement" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateLancement" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantDatePicker  label="Date de cloture" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateCloture" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantDatePicker  label="Date de tirage" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateTirage" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Huissier" rules=""  placeholder="Huissier" name="huissiertext" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" />
			<InstantField label="Url règlement" rules="required"  placeholder="Url règlement" name="urlReglement" storename="partenaires" storeproperty="currentPartenaire" updateStoreAction="updateCurrentPartenaire" /> -->
			<!-- <InstantField label="Email" rules="required|email"  placeholder="Email" name="emailAddress" storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
			<InstantField label="Téléphone" rules="required|min:8|max:12"  placeholder="Téléphone" name="phone" storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser" />
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