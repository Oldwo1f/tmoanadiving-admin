<template>
<div>
	<b-modal id="modalRemoveLogo" header-bg-variant="danger" @ok="modalConfirmedLogo"
		header-text-variant="white" centered size="sm" title="Êtes vous sûr?"  ok-title="Oui. Je suis sûr" ok-variant="success" cancel-title="Annuler" cancel-variant="danger">
		<p style="text-align:center;margin-bottom:0px;">Supprimer définitivement <br> le logo ?</p>
	</b-modal>
	<div class="ImageListContainer">
		<div v-for="image in images" :key="image.id" class="item">
			<img :src="$config.apiURL +'image/'+ image.filename" alt="">
			<b-btn  class=" myimageBTn btn-danger btn-sm" v-b-modal.modalRemoveLogo @click="setToRemoveIdLogo(image.id)"><span class="material-icons">
				delete
			</span></b-btn>
		</div>
	</div>
</div>
</template>

<script setup> 
                                                                   
	import { ValidationProvider } from 'vee-validate';
const { $store,$axios} = useNuxtApp()
const state = $store.state;

const props = defineProps({
  storeproperty: { type:String,
		 default:''
  },
  storename: { type:String,
		 default:''
  },
  name: { type:String,
		 default:''
  },
  updateStoreAction: { type:String,
		 default:''
  },
  deleteStoreAction: { type:String,
		 default:''
  },
})
let idToRemove= '';
const images = computed({
		get:() =>  state[props.storename][props.storeproperty][props.name],
		set: (val) => { console.log('setVal',val);},
	})
// console.log('process.env.API_URL==',$config.apiURL);
console.log('images',images);
console.log('LOGOLIST6666-----------------------------------------------------------------------------');
// const { $store } = useNuxtApp()
// const emit = defineEmits()  
// const collapsed = ref(false);

const update2 = function(e){

	console.log('UPDATE');
	console.log('e',e);
	console.log('model',model);
	console.log('model',model.value);
	console.log('model',model);
	base64Encode(model.value)
            .then(value => {
				console.log('ICI');
              imageSrc.value = value;
            })
            .catch(() => {
				console.log('ICI2');
              imageSrc.value = null;
            });

	
}
const setToRemoveIdLogo = (val)=> {
	console.log('SET ID TO REMOVE',val);
  idToRemove = val
}
const modalConfirmedLogo = async function(val){
	console.log('DELETE Logo');
  console.log('idToRemove',idToRemove);
		const result = await $store.dispatch(props.storename+'/'+props.deleteStoreAction,{id:idToRemove}).then(async function(t){
			console.log('AFTER REMOVE');
		})
}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.ImageListContainer{
	// background:red;
	min-height: 100px;
	min-width:100px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.item{
	position: relative;
	max-width:25%;
	img{
		width:100%;
	}
}

.myflex .item{
	position: relative;
	max-width:100%;
	img{
		width:100%;
	}
}
.myimageBTn{
	position:absolute;
	bottom: 10px;
	right:10px;
	height: 25px;
    width: 25px;
	display: flex;
	align-items: center;
	justify-content: center;

	span{
		font-size: 16px;
		height: 16px;
		width: 16px;
		padding:0px;
	}
}
</style>