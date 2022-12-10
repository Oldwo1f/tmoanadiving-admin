<template>
	<div class=" masonryBlock">
		<div class="card">
			<div class="card-body">

				<h4 class="card-title">Parametres facturation</h4>
				<!-- <vue-editor v-model="form.descriptionoffre"></vue-editor> -->
				<InstantField label="Email de facturation" rules="email" type="text" placeholder="Email de facturation"
					name="emailFacturation" storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" />
				<InstantField label="Numéro Tahiti" rules="required" type="text" placeholder="Numéro Tahiti"
					name="nTahiti" storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" />
				<!-- <InstantField label="N° facture client" rules="required" placeholder="N° facture client"
					name="numeroFactureClient" storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" />
				<InstantField label="Préfix facture client" rules="required" placeholder="Préfix facture client"
					name="prefixFactureClient" storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" /> -->
				<InstantField label="N° facture " rules="required|numeric" type="number" placeholder="N° facture "
					name="numeroFactureInterne" storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" />
				<InstantField label="Préfix facture " rules="required" placeholder="Préfix facture "
					name="prefixFactureInterne" storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" />
				<InstantField label="Footer facture" rules="required" placeholder="infos légale" name="footerfacture"
					storename="partenaires" storeproperty="currentPartenaire"
					updateStoreAction="updateCurrentPartenaire" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate';

const { $store } = useNuxtApp()
const state = $store.state;
// const { $store } = useNuxtApp()
// const emit = defineEmits()  
// const collapsed = ref(false);
// let model = ref()
// watchEffect(() => {console.log('watchEffect'); model.value= state[props.storename][props.storeproperty][props.name];})

const update = function (e) {

	console.log('UPDATE');
	console.log('e', e);

}
const emitEvent = function (e) {

	console.log('emitEvent');
	console.log('e', e);

}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.imageBox {
	border: 2px dashed black;
	width: 300px;
	height: 300px;
}
</style>