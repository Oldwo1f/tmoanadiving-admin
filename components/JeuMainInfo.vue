<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<!-- <h4 class="card-title">Informations</h4> -->
			
			<InstantField label="Nom du jeu" rules="required|alpha_spaces|min:2"  placeholder="Nom du jeu" name="name" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<!-- <InstantField label="Nom de l'annonceur" rules="required|alpha_spaces|min:2"  placeholder="Nom de l'annonceur" name="annonceur" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" /> -->
			<InstantField label="Nom du dossier" rules="required"  placeholder="Nom du dossier" name="url" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<!-- <InstantField  label="Date de lancement" rules="max:25|birthdate"  placeholder="JJ/MM/AAAA" name="dateLancement" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" /> -->
			<InstantDatePicker  label="Date de lancement" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateLancement" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantDatePicker  label="Date de cloture" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateCloture" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantDatePicker  label="Date de tirage" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateTirage" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<!-- <InstantField label="Huissier" rules=""  placeholder="Huissier" name="huissiertext" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" /> -->
			<!-- <InstantField label="Url règlement" rules="required"  placeholder="Url règlement" name="urlReglement" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" /> -->
			<InstantField label="Texte partage" rules="required"  placeholder="Texte à afficher lors du partage" name="shareText" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Nombre de partage" rules="required|numeric"  placeholder="Nombre de partage à effectuer" name="nbPartage" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Site web de l'annonceur" rules="required"  placeholder="http://" name="urlannonceur" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />


			<InstantPartenairePicker label="Partenaire" rules=""  placeholder="Choisir un partenaire" name="partenaire" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
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