// import { extend } from "vee-validate";
// import { required, alpha } from "vee-validate/dist/rules";

// extend("required", {
// 	...required,
// 	message: "Ce champs est requis"
// });

// extend("alpha", {
// 	...alpha,
// 	message: "Doit contenir uniquement des lettres"
// });


import Vue from 'vue'
import { extend, Validator, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, alpha, email, min, max, numeric, confirmed, alpha_spaces, alpha_num, oneOf, digits, url, date_format } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
	...required,
	message: 'Ce champs est requis'
})
extend('oneOf', {
	...oneOf,
	message: 'Valeur incorrecte'
})

extend('alpha', {
	...alpha,
	message: 'Ce champ ne peut contenir que des lettres'
})
extend('alpha_spaces', {
	...alpha_spaces,
	message: 'Ce champ ne peut contenir que des lettres et des espaces'
})
extend('alpha_num', {
	...alpha_num,
	message: 'Ce champ ne peut contenir que des lettres et des chiffres'
})

extend('email', {
	...email,
	message: 'Veuillez entrer une adresse email valide'
})
// extend('url', {
// 	...url,
// 	message: 'Veuillez entrer une adresse Url valide'
// })
extend('digits', {
	...digits,
	message: 'Veuillez entrer une adresse email valide'
})

extend('min', {
	...min,
	message: (fieldname, field) => 'Minimum de ' + field.length + ' charactères'
})

extend('max', {
	...max,
	message: (fieldname, field) => 'Maximun de ' + field.length + ' charactères'
})
extend('numeric', {
	...numeric,
	message: (fieldname, field) => 'Doit être une valeur numérique'
})
extend('confirmed', {
	...confirmed,
	message: (fieldname, field) => 'Le mot de passe doit être identique'
})

// extend('date_format', {
//   ...date_format,
//   message: (fieldname, field) => 'Veuillez saisir une date'
// })

// for (const [rule, validation] of Object.entries(rules)) {
//   // noinspection TypeScriptValidateTypes
//   extend(rule, {
//     ...validation
//   })
// }

// const mycustomrule = {
// 	getMessage(field, args) {
// 		return 'My custom rule'
// 	},

// };
const regexBithDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
extend('birthdate', {
	validate(value, args) {
		console.log('validate', value);
		return regexBithDate.test(value)

	},
	message: (fieldname, field) => 'Doit être une date valide au format JJ/MM/AAAA'
})