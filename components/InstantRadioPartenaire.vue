<template>
	<div>

		<b-form-radio-group
							id="btn-radios-1"
							v-model="selected"
							
							:options="options"
							name="radios-btn-default"
							:button-variant="variant"
							buttons
							@change="updateValue"
						></b-form-radio-group>
	
</div>

</template>
  
<script setup>
const { $store } = useNuxtApp()
const state = $store.state;
const props = defineProps({

  options: { type:Array,
		 default:{}
  },
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
})

// const options = ref([
//           { text: 'Actif', value: 'actif',variant:"success" },
//           { text: 'Inactif', value: 'inactif',variant:"danger" },
//           { text: 'Archive', value: 'archive',variant:"success" }
//         ])

const selected = computed({
		get:() =>  state[props.storename][props.storeproperty][props.name],
		set: (val) => { console.log('setVal',val);},
	})



let model = ref()
let variant =ref('outlined-primary')
watchEffect(() => {
	console.log('watchEffect');
	 model.value= state[props.storename][props.storeproperty][props.name];
	if(model.value == 'club'){
		console.log('club');
		variant.value = 'outline-success'
	}
	if(model.value == 'agency'){
		console.log('agency');
		variant.value = 'outline-info'
	}
	
})
const updateValue = async function(val){
		const result = await $store.dispatch(props.storename+'/'+props.updateStoreAction,{val:val, key:props.name}).then(async function(t){})
}

</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.searchbar{
	width : 300px;
	border-radius:20px;
	padding:5px 15px;
	border:1px solid #ccc;
	// box-shadow:0;
	outline:0;
	height: 40px;
	&:focus{
		border-color:#bbb;
	}
}


</style>