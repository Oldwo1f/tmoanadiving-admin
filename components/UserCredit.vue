<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Crédit plongées</h4>
			
			<InstantField label="Crédit plongée" rules="required|numeric" placeholder="Crédit plongée" name="creditPlongee" storename="users" storeproperty="currentUser" updateStoreAction="updateCurrentUser"/>
			
			<InstantDatePicker  label="Date d'expiration" rules="required" :inlinemode="true" placeholder="JJ/MM/AAAA" name="dateExpiCredit" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
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

.min-width{
	width:40%;
}
</style>