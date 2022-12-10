<template>
	<div class=" masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Inscriptions</h4>
			<p v-if="model">Il y a <strong>{{model.length}}</strong> inscrits à ce jeu.</p>
			<vue-json-to-csv
              :json-data="model"
              :labels="{
              firstName: { title: 'Nom' },
              lastName: { title: 'Prénom' },
              email: { title: 'Email' },
              phone: { title: 'Téléphone' },
              city: { title: 'Ville' },
              id: { title: 'Id' },
              gender: { title: 'Genre' },
              optin: { title: 'Optin' },
              reponse: { title: 'Reponse' },
              }"
              :csv-title="'Liste des inscriptions'"
              >
              <b-btn class="btn-info btn-square" title="Télécharger au format CSV"><span class="material-icons">file_download</span></b-btn>
            </vue-json-to-csv>

			</div>
		</div>
		</div>
</template>

<script setup>                                                                       
	import { ValidationProvider } from 'vee-validate';
const { $store } = useNuxtApp()
const state = $store.state;
	console.log('JEUXINSCRIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
let datas=computed({
		get:() =>  { return{...state['jeux']['currentJeu']['inscrits']} },
		set: (val) => { console.log('setVal',val);},
	})
	console.log(datas);
	let model=ref();
	watchEffect(() => {console.log('watchEffect!!!!!!!'); model.value= state['jeux']['currentJeu']['inscrits'];console.log('model.value',model.value);})
	console.log('model',model);
// const saveOptions = async function(e){

// 	console.log('UPDATE');
// 	console.log('e',e);
// 	// console.log('model',model.value);
// 	console.log('optionsValues',optionsValues.value);

// 	const result = await $store.dispatch('jeux/updateCurrentJeu',{val:optionsValues.value, key:'options'}).then(async function(t){
// 			console.log('reponse',t);
// 		})
// 		console.log('result',result);
	
// }
// const emitEvent = function(e){

// 	console.log('emitEvent');
// 	console.log('e',e);
	
// }
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.blockSwitch{
	display: inline-block;
}

label.label{display: inline-block;font-weight: 600;width:auto; line-height: 20px;}
.switch{display: inline-block;margin-left: 10px; margin-right: 20px;}
label.label:after{content:' :';}

</style>