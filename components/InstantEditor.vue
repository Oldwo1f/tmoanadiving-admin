<template>
	<div class="mycustominput">

	<!-- {{props.label}} -->
	<!-- <input  v-model="model" type="text" :placeholder="props.placeholder"> -->

	<ValidationProvider :rules="rules" v-slot="{ errors }">
		<label :for="props.name" class="label" v-if="props.label!='label'">{{props.label}}</label>
		<!--:lazy="false" :trim="true" <input :type="props.type" name="fieldname"  placeholder="Entrer un nom" @input="emit('update:modelValue',$event.target.value)"> -->
		<vue-editor v-model="model" @blur="updateValue(errors)"></vue-editor>
		<!-- <b-form-input @input="eventListener(errors)" @blur="updateValue(errors)" @keyup.enter.native="onEnter"  :name="props.name" :state="errors.length? false : null" v-model="model" :placeholder="props.placeholder" ></b-form-input> -->
		<span class="errors">{{ errors[0] }}</span>
		</ValidationProvider>
</div>

</template>
  
<script setup>
		import { VueEditor } from "vue2-editor";
const { $store } = useNuxtApp()
const state = $store.state;
const props = defineProps({
	label: { type:String,
		 default:'label'
  },
  placeholder: { type:String,
		 default:'--'
  },
  rules: { type:String,
		 default:'required'
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

const cuser = "currentUser"
const uuser = "users"
console.log(props.storeproperty);
console.log(props.storename);
console.log(props.rules);

const value = computed({
		get:() =>  state[props.storename][props.storeproperty][props.name],
		set: (val) => {  
			console.log('setVal---',val);
			return val
		},
	})


let model = ref()
watchEffect(() => {console.log('watchEffect'); model.value= state[props.storename][props.storeproperty][props.name];})



const eventListener = async function(val){
	console.log('eventListener');
	console.log(val);

	console.log('error.length=>',val.length);
}
const onEnter = async function(e){
	console.log('eventListener onEnter');
	console.log(e);
	e.target.blur()
	// console.log('error.length=>',val.length);
}
const updateValue = async function(errors){
	console.log('EMITEVENT');
	console.log('value',value.value );

	if(errors.length){

	}else{
		const result = await $store.dispatch(props.storename+'/'+props.updateStoreAction,{val:model.value, key:props.name}).then(async function(t){
			console.log('reponse',t);
		})
		console.log('result',result);
	}
	
	// result
	// $store.dispatch('users/updateCurrentUser',{key:'name',value:c})

	// emit('updateValue', c)
}

</script>
<style scoped lang="less">
@import '~static/less/variable.less';

label.label{display: inline-block;font-weight: 600;width:200px; line-height: 20px;}
label.label:after{content:' :';}
input{display: inline-block;width:auto;min-width:300px;
	border:none;
	box-shadow: none;
}
input:focus{
	border:1px solid lightgrey;
	box-shadow: none;
}
.mycustominput{
	border-bottom:1px solid #eee;
}
.errors{
	padding-left: 217px;
    margin-top: 0px;
    top: -5px;
    position: relative;
	display: block;
}

</style>