<template>
<div>
<b-button @click="test">test</b-button>

<b-button variant="outline-danger" v-b-modal.modal-1>
	<span class="material-icons">
		delete
	</span>
</b-button>		
<b-modal id="modal-1" header-bg-variant="danger" @ok="modalConfirmed"
      header-text-variant="white" centered size="sm" title="Etes vous sûr?"  ok-title="Oui. Je suis sûr" ok-variant="success" cancel-title="Annuler" cancel-variant="danger">
    <p style="text-align:center;margin-bottom:0px;">Supprimer définitivement <br> l'utilisateur ?</p>
  </b-modal>
</div>

</template>
  
<script setup>
const { $store } = useNuxtApp()
const state = $store.state;
const route = useRoute()
const router = useRouter()
const props = defineProps({

	valueId: { type:String,
		 default:{}
  },
  storename: { type:String,
		 default:''
  },
  storeAction: { type:String,
		 default:''
  },
})

// const options = ref([
//           { text: 'Actif', value: 'actif',variant:"success" },
//           { text: 'Inactif', value: 'inactif',variant:"danger" },
//           { text: 'Archive', value: 'archive',variant:"success" }
//         ])

// const selected = computed({
// 		get:() =>  state[props.storename][props.storeproperty][props.name],
// 		set: (val) => { console.log('setVal',val);},
// 	})



// let model = ref()
// let variant =ref('outlined-primary')
// watchEffect(() => {
// 	console.log('watchEffect');
// 	 model.value= state[props.storename][props.storeproperty][props.name];
// 	if(model.value == 'actif'){
// 		console.log('actif');
// 		variant.value = 'outline-success'
// 	}
// 	if(model.value == 'inactif'){
// 		console.log('inactif');
// 		variant.value = 'outline-danger'
// 	}
// 	if(model.value == 'archive'){
// 		console.log('archive');
// 		variant.value = 'outline-warning'
// 	}
// })
const test = ()=>{
	router.push('/users')
}
const modalConfirmed = async function(val){
	console.log('DELETE USER');
	// test()
	router.push('/users')
		// const result = await $store.dispatch(props.storename+'/'+props.storeAction,{id:props.valueId}).then(async function(t){

		// 	console.log('AFTER REMOVE');
		// })
}

</script>
<style scoped lang="less">
@import '~static/less/variable.less';

button{
	margin-left: 10px;
	display: flex;
}


</style>