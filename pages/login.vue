<template>
  <div class="mycontainer">
    <h1>Login</h1>
    
    <ValidationObserver ref="validatorLogin" >
      <form @submit.prevent="submitLogin">

        <ValidationProvider class="formElem" rules="required|email" v-slot="{ errors }">
          <b-input type="text" v-model="formLogin.username" placeholder="Adresse email" :state="errors.length? false : null" />
          <span class="errors">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="formElem" rules="required" v-slot="{ errors }">
          <b-input :type="passwordVisibility" v-model="formLogin.password" placeholder="Mot de passe" :state="errors.length? false : null" />
          <span  class="errors">{{ errors[0] }}</span>
          <div class="showpasswordbtn" @click="tooglePasswordVisibility" :class="{'witherrors': errors.length}">
            <span class='material-icons' v-if="passwordVisibility=='password'">visibility</span>
            <span class='material-icons' v-if="passwordVisibility=='text'">visibility_off</span>
          </div>
        </ValidationProvider>
        <div class="flexfooterModal">
          <Alert class="mb-2"/>
          <b-button  class="btn-success" type="submit" value="login" > Se connecter </b-button>
        </div>
        <hr>
        <div class="flexfooterModal">
          <b-button  class="btn-info" @click="facebookLogin"  > Se connecter avec Facebook </b-button>
        </div>
      </form>
      </ValidationObserver>
  </div>
</template>

<script>
export default {
  layout: "secondary",
  auth: false
}
</script>
<script setup>
  const { $store, $auth ,$router} = useNuxtApp()
  // const context = useNuxtApp()
  // console.log(context);
  const validatorLogin = ref()
  const passwordVisibility = ref('password')
  const tooglePasswordVisibility = () =>{

    console.log('toogle password ');
    console.log(passwordVisibility.value);
    if(passwordVisibility.value =='password'){
      console.log('true');
      passwordVisibility.value = 'text'
    }
    else if(passwordVisibility.value =='text'){
      passwordVisibility.value = 'password'
    }
    console.log(passwordVisibility.value);
  }
  const formLogin = ref({
  username:'aaa@aaa.aaa',
  password:'pbgrlh',
})

const userLogin = async () => {
  console.log('userLogin');
  console.log(formLogin.value );
     
    }


  const facebookLogin= async (e,context)=> {
		console.log('submitFACEBOOKLogin:');

    

        try {
          console.log('----------------------------');
          // const datatogo = {
          //   emailAddress: formLogin.value.username,
          //    password : formLogin.value.password
          // }
          // console.log('datatogo', datatogo);
          // let response = await $auth.loginWith('local', { data: datatogo })
          let response = await $auth.loginWith('facebook')
          // $router.push('/');
          console.log(response)
        } catch (err) {
          console.log('err=',err.response)
        }
        
    
  };
  const submitLogin= async (e,context)=> {
		console.log('submitLogin:');

    validatorLogin.value.validate().then( async (success) => {
      console.log('success',success);
        if (!success) {
          return;
        }

        try {
          console.log('----------------------------');
          const datatogo = {
            emailAddress: formLogin.value.username,
             password : formLogin.value.password
          }
          console.log('datatogo', datatogo);
          let response = await $auth.loginWith('local', { data: datatogo })
          $router.push('/');
          console.log(response)
        } catch (err) {
          // console.log('err=',err)
          console.log('err=',err)
          console.log('===>',err.response.data)
          $store.dispatch('global/alert', {
            text: err.response.data,
            variant: 'danger',
            countDown: 4
          }, { root: true })
        }
        
    })
  };
   
</script>

<style scoped lang="less">
h1{
  text-align: center;
  margin-bottom: 20px;
  user-select: none;
}
.mycontainer{
  padding:20px;

  .formElem{
    margin-bottom: 10px;
    display: block;
    position: relative;
  }
  .flexfooterModal{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .btn-success{
    text-align: center;
  }
  .showpasswordbtn {
    user-select: none;
    cursor: pointer;
    color:lightgrey;
    position: absolute;
    right: 6px;
    top: 7px;
    span{
      user-select: none;
    }
    &.witherrors{
      right:30px;
    }
  }
}
</style>