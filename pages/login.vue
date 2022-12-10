<template>
  <div class="mycontainer">
    <div class="head">
      <div class="logocrea"></div>
      <h1>Login</h1>
    </div>


    <ValidationObserver ref="validatorLogin" v-if="!passwordforgot">
      <form @submit.prevent="submitLogin">

        <ValidationProvider class="formElem" rules="required|email" v-slot="{ errors }">
          <b-input type="text" v-model="formLogin.username" placeholder="Adresse email"
            :state="errors.length ? false : null" />
          <span class="errors">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="formElem" rules="required" v-slot="{ errors }">
          <b-input :type="passwordVisibility" v-model="formLogin.password" placeholder="Mot de passe"
            :state="errors.length ? false : null" />
          <span class="errors">{{ errors[0] }}</span>
          <div class="showpasswordbtn" @click="tooglePasswordVisibility" :class="{ 'witherrors': errors.length }">
            <span class='material-icons' v-if="passwordVisibility == 'password'">visibility</span>
            <span class='material-icons' v-if="passwordVisibility == 'text'">visibility_off</span>
          </div>
        </ValidationProvider>
        <div class="flexfooterModal">
          <Alert class="mb-2" />
          <b-button class="btn-success" type="submit" value="login"> Se connecter </b-button>
          <a @click="togglepasswordforgot" style="cursor: pointer;margin-top:10px;">mot de passe oublié ?</a>
        </div>
        <!-- <hr>
        <div class="flexfooterModal">
          <b-button  class="btn-info" @click="facebookLogin"  > Se connecter avec Facebook </b-button>
        </div> -->
      </form>
    </ValidationObserver>
    <ValidationObserver ref="validatorRecup" v-else>

      <form @submit.prevent="submitRecup">
        <p style="text-align: center;">Renseigner votre email afin de lancer la récupération de mot de
          passe.</p>

        <div class="inputblock">
          <div class="picto1"></div>
          <input type="text" placeholder="Email" v-model="formRecup.emailAddress">
        </div>

        <Alert />
        <input type="submit" value="Récupérer mon mot de passe">
        <div class="separatorsmall"></div>
        <a @click="togglepasswordforgot">Retour Login ?</a>
        <!-- <small>Pas encore de compte ? <a href="">Je m'inscrit</a></small> -->
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
const { $axios, $store, $auth, $router } = useNuxtApp()
// const context = useNuxtApp()
// console.log(context);
const validatorLogin = ref()
const validatorRecup = ref()
const passwordVisibility = ref('password')
const passwordforgot = ref(false)
const tooglePasswordVisibility = () => {

  console.log('toogle password ');
  console.log(passwordVisibility.value);
  if (passwordVisibility.value == 'password') {
    console.log('true');
    passwordVisibility.value = 'text'
  }
  else if (passwordVisibility.value == 'text') {
    passwordVisibility.value = 'password'
  }
  console.log(passwordVisibility.value);
}

const togglepasswordforgot = () => {

  passwordforgot.value = !passwordforgot.value;
}
const formLogin = ref({
  username: '',
  password: '',
})

const formRecup = ref({
  emailAddress: '',
})
const userLogin = async () => {
  console.log('userLogin');
  console.log(formLogin.value);

}
const submitRecup = async (e, context) => {

  validatorRecup.value.validate().then(async (success) => {
    if (!success) {
      return;
    }

    try {
      console.log('----------------------------');
      const datatogo = {
        emailAddress: formRecup.value.emailAddress,
      }
      console.log('datatogo', datatogo);
      const response = await $axios.post(process.env.API_URL + 'user/forgotpassword', datatogo)
      console.log('response:', response)
      $store.dispatch('global/alert', {
        text: 'Veuillez suivre la procédure par email.',
        variant: 'success',
        countDown: 6
      }, { root: true })
      passwordforgot.value = false
      // let response = await $auth.loginWith('local', { data: datatogo })
      // console.log(response);
      // $router.push('/');
    } catch (err) {
      console.log('===>error', err)
      $store.dispatch('global/alert', {
        text: 'Une erreur s\'est produite',
        variant: 'danger',
        countDown: 4
      }, { root: true })
    }

  })
};

const facebookLogin = async (e, context) => {
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
    console.log('err=', err.response)
  }


};
const submitLogin = async (e, context) => {
  console.log('submitLogin:');

  validatorLogin.value.validate().then(async (success) => {
    console.log('success', success);
    if (!success) {
      return;
    }

    try {
      console.log('----------------------------');
      const datatogo = {
        emailAddress: formLogin.value.username,
        password: formLogin.value.password
      }
      console.log('datatogo', datatogo);
      let response = await $auth.loginWith('local', { data: datatogo })
      $router.push('/partenaires');
      console.log(response)
    } catch (err) {
      // console.log('err=',err)
      console.log('err=', err)
      console.log('===>', err.response.data)
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
.head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  user-select: none;
}

.logocrea {
  width: 80px;
  height: 80px;
  background: url('assets/images/crealogo.png') left top no-repeat;
  background-size: contain;
}

.mycontainer {
  padding: 20px;

  .formElem {
    margin-bottom: 10px;
    display: block;
    position: relative;
  }

  .flexfooterModal {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .btn-success {
    text-align: center;
  }

  .showpasswordbtn {
    user-select: none;
    cursor: pointer;
    color: lightgrey;
    position: absolute;
    right: 6px;
    top: 7px;

    span {
      user-select: none;
    }

    &.witherrors {
      right: 30px;
    }
  }
}
</style>