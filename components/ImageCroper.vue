<template>
	<div class="croppaWrapper">
			<!-- <b-form-file @change="update" accept="image/*" v-model="model"></b-form-file>
			<div class="imagePreview"><img :src="imageSrc" alt=""></div> -->

			<croppa v-model="myCroppa"
			:width="imgwidth"
			:height="imgheight"
			:quality="quality"
			placeholder="Choisir une image"
			accept="image/x-png,image/gif,image/jpeg"
         :file-size-limit="0"
         @file-type-mismatch="onFileTypeMismatch"
         @file-size-exceed="onFileSizeExceed"
		 :zoom-speed="5"
         :reverse-scroll-to-zoom="false"
		 :prevent-white-space="true"
		 @file-choose="filechoosen"
		 ></croppa>
		 <!-- <button class="btn small btn-success">UPLOAD</button> -->
		 <b-button v-if="hasimage" class="buttonupload" variant="success" size="sm" @click="upload">
			<span class="material-icons">
				upload_file
			</span>
			 <span>upload</span>
		</b-button>	
		<div class="imageSizeInfo">
			<div class="width"> <span class="material-icons" style="transform: rotate(90deg);" >height</span> {{ imgwidth*quality }} px</div>
			<div class="separator">/</div>
			<div class="height"><span class="material-icons">height</span>{{ imgheight*quality }} px</div>
			
		</div>
		 </div>
</template>

<script setup> 
                                                                   
	import { ValidationProvider } from 'vee-validate';
const { $store,$axios } = useNuxtApp()
const state = $store.state;
const props = defineProps({
  itemId: { type:String,
		 default:''
  },itemType: { type:String,
		 default:''
  },itemType2: { type:String,
		 default:'Image'
  },imgwidth: { type:Number,
		 default:'400'
  },imgheight: { type:Number,
		 default:'300'
  },quality: { type:Number,
		 default: 3
  },
})


console.log('props',props);
console.log('itemId===============>',props.itemId);
// const { $store } = useNuxtApp()
// const emit = defineEmits()  
// const collapsed = ref(false);
let myCroppa=ref()
let model=ref()
let imageSrc=ref('')
let hasimage=ref(false)

// watchEffect(() => {console.log('watchEffect999!!!!!!!', myCroppa.value); if(myCroppa.value)})
const filechoosen =  function(e){
	console.log('FileChoosen');
	hasimage.value=true;
}
const upload =  function(e){

	console.log('myCroppa');
	console.log(myCroppa);
	if (!myCroppa.value.hasImage()) {
        alert('no image to upload')
        return
      }
      const fileinfo = myCroppa.value.getChosenFile()
	  console.log(fileinfo);
	  console.log(fileinfo.name);
	  console.log(fileinfo.name);
      myCroppa.value.generateBlob(async (blob) => {
        var fd = new FormData()
        fd.append('image', blob,fileinfo.name)

		console.log('HERE');
		console.log('itemId===============>',props.itemId);
		console.log('itemType===============>',props.itemType);
		console.log('itemType2===============>',props.itemType2);
        // $.ajax({
        //   url: 'http://www.xxx.com/api/upload',
        //   data: fd,
        //   type: 'POST',
        //   processData: false,
        //   contentType: false,
        //   success: function(data) {
        //     alert(data)
        //   }
        // })
			// return { toto: 'toto' }
			console.log('mypayload createJeu');
			console.log('');
			console.log('fileinfo.name=',fileinfo.name);
			 await $axios.post(process.env.API_URL + 'api/v1/'+props.itemType+'/'+props.itemId+'/add'+props.itemType2, fd).then(function (rep) {
				console.log('rep axios', rep);
				
				if (rep.status === 200) {
					hasimage.value=false;
					myCroppa.value.remove()

				}

			}).catch(
				function (err, v) {
					console.log('err');
					console.log(err);
					console.log(err.response);
					hasimage.value=false;
					myCroppa.value.remove()
					// if (err.response.status === 409) {

					// 	console.log('heyho');
					// 	state.dispatch('global/alert', {
					// 		text: 'Le nom du jeu doit être unique',
					// 		variant: 'danger',
					// 		countDown: 5
					// 	}, { root: true })
					// 	return { err: 'Le nom du jeu doit être unique' };

					// }
				}
			)
      })

	
}

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
// const emitEvent = function(e){

// 	console.log('emitEvent');
// 	console.log('e',e);
	
// }
const onFileTypeMismatch = function(file) {
       alert('Invalid file type. Please choose a jpeg or png file.')
     }
const onFileSizeExceed = function(file) {
	alert('File size exceeds. Please choose a file smaller than 100kb.')
}

</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.imageBox{
	border:2px dashed black;
	width: 300px;
	height:300px;
}
.croppaWrapper{
	position: relative;
	display: inline-block;
	width: 400px;
	height: 300px;
	transform: translateX(-50%);
	left:50%;
}
.myflex .croppaWrapper{
	position: relative;
	display: inline-block;
	width: 400px;
	height: 300px;
	transform: translateX(0%);
	left:0%;
}
.buttonupload{
	display:inline-flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right:10px;
	bottom:10px;

	span.text{
		height:24px;
	}
}
.imageSizeInfo{
	position: absolute;
	top: -25px;
	left:50%;
	transform:translate(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;

	div{
		display: flex;
	align-items: center;
	justify-content: center;
	}

			
	.separator{
		padding : 0px 5px 0px 10px;
	}		
	.height{
		span{
			font-size: 22px;
		}
	}
}
</style>