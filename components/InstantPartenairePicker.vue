

<template>
	<div class="mycustominput">

	<!-- {{props.label}} -->
	<!-- <input  v-model="model" type="text" :placeholder="props.placeholder"> -->

	<ValidationProvider :rules="rules" v-slot="{ errors }">
		<label :for="props.name" class="label">{{props.label}}</label>
		<!--:lazy="false" :trim="true" <input :type="props.type" name="fieldname"  placeholder="Entrer un nom" @input="emit('update:modelValue',$event.target.value)"> -->
		<!-- <b-form-input @input="eventListener(errors)" @blur="updateValue(errors)" @keyup.enter.native="onEnter"  :name="props.name" :state="errors.length? false : null" v-model="model" :placeholder="props.placeholder" ></b-form-input> -->
		<!-- <b-form-select @input="eventListener(errors)" @blur="updateValue(errors)" @keyup.enter.native="onEnter"  :name="props.name" :state="errors.length? false : null" v-model="model" :placeholder="props.placeholder" ></b-form-input> -->
			<b-form-select  class="mySelect" v-model="model" :options="partenaires" value-field="id" text-field="name"  @change="updateValue(errors)" :state="errors.length? false : null " placeholder="choisir un partenaire"></b-form-select>
		<span class="errors">{{ errors[0] }}</span>
		</ValidationProvider>
</div>

</template>
  
<script setup>
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
console.log(props.storename);
console.log(props.storeproperty);
console.log(props.name);
console.log(props.rules);
$store.dispatch('partenaires/fetchPartenaires',{archive:false})

const value = computed({
		get:() =>  state[props.storename][props.storeproperty][props.name],
		set: (val) => { console.log('setVal',val);},
	})

console.log('value',value);
let model = ref()
watchEffect(() => {console.log('watchEffect!!!!!!!!!!!!!!!!!!!');
model.value= state[props.storename][props.storeproperty][props.name];})

const partenaires = computed({
	get:() =>  state['partenaires']['partenaires'],
		set: (val) => { console.log('setVal',val);},
})
console.log('partenaires',partenaires);

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
	console.log('errors',errors);

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
.mySelect{display: inline-block;width: calc(100% - 205px);min-width:300px;
	border:none;
	box-shadow: none;
}
.mySelect:focus{
	border:1px solid lightgrey;
	box-shadow: none;
}
.mySelect{
	// border-bottom:1px solid #eee;
}

.errors{
	padding-left: 217px;
    margin-top: 0px;
    margin-bottom: 3px;
    top: 0px;
    position: relative;
	display: block;
}
</style>