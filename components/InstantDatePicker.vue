<template>
	<div class="mycustominput">

	<!-- {{props.label}} -->
	<!-- <input  v-model="model" type="text" :placeholder="props.placeholder"> -->

	<ValidationProvider :rules="rules" v-slot="{ errors }" class="inlineField">
		<label class="label" :for="props.name">{{props.label}}</label>
		<!--:lazy="false" :trim="true" <input :type="props.type" name="fieldname"  placeholder="Entrer un nom" @input="emit('update:modelValue',$event.target.value)"> -->
		
		<b-form-datepicker
				v-model="value"
				locale="fr-FR"
				right
				dropright
				value-as-date
				aria-controls="example-input"
				></b-form-datepicker>
		<!-- <b-form-input @input="eventListener(errors)" @blur="updateValue(errors)"   :name="props.name" :state="errors.length? false : null" v-model="model" :placeholder="props.placeholder" ></b-form-input> -->
		<span class="errors">{{ errors[0] }}</span>
		</ValidationProvider>
</div>

</template>
  
<script setup>
const { $store, $dayjs } = useNuxtApp()
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
  inlinemode: { type:Boolean,
		 default:false
  },
})

const cuser = "currentUser"
const uuser = "users"
console.log(props.storeproperty);
console.log(props.storename);
console.log(props.rules);
console.log(props.inlinemode);

const value = computed({
		get:() =>  new Date(state[props.storename][props.storeproperty][props.name]),
		set: (val) => { 
			console.log('setVal',val);
			console.log($dayjs(val).valueOf())
			return updateValue($dayjs(val).valueOf())
		},
	})


let model = ref()
watchEffect(() => {console.log('watchEffect'); model.value= new Date(state[props.storename][props.storeproperty][props.name]);})



const eventListener = async function(val){
	console.log('eventListener');
	console.log(val);

	console.log('error.length=>',val.length);
}
const updateValue = async function(val){
	console.log('EMITEVENT');
	console.log('val',val, $dayjs(val).format('DD/MM/YYYY'));

	// if(errors.length){

	// }else{
		const result = await $store.dispatch(props.storename+'/'+props.updateStoreAction,{val:val, key:props.name}).then(async function(t){
			console.log('reponse',t);
		})
		console.log('result',result);
	// }
	
	// result
	// $store.dispatch('users/updateCurrentUser',{key:'name',value:c})

	// emit('updateValue', c)
}

</script>
<style  lang="less">
@import '~static/less/variable.less';

label.label{display: inline-block;font-weight: 600;width:200px;}
label.label:after{content:' :';}
.b-form-datepicker{display: inline-block;width:auto;min-width:300px;
	border:none;
	box-shadow: none;
}
.b-form-datepicker:focus{
	border:1px solid lightgrey;
	box-shadow: none;
}
.mycustominput{
	border-bottom:1px solid #eee;
}

// .b-form-datepicker .btn {
// 	position: absolute;
// 	right:0px
// }

.b-form-btn-label-control.form-control > .btn{
	// display:none !important;
	// background:red;
}

.inlineField{
	display:flex;
	align-items: center;
	padding:1px 0px 1px 0px;

	label{
		margin-bottom: 0;
		line-height: 20px;
	}
}

label.form-control{
		margin-bottom: 0;
		line-height: 24px;
	}

	.errors{
	padding-left: 217px;
    margin-top: 0px;
    top: -5px;
    position: relative;
	display: block;
}
</style>