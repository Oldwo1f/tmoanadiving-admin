<template>
<div>
<div class="containerMask">
<!-- <transition name="nested"> -->
<div class="panelContainer" :class="{secondary : route.path !=='/plongees'}">
  <!-- <div class="absoluteTest"></div> -->
  <b-modal id="modalRemove" header-bg-variant="danger" @ok="modalConfirmed"
      header-text-variant="white" centered size="sm" title="Êtes vous sûr?"  ok-title="Oui. Je suis sûr" ok-variant="success" cancel-title="Annuler" cancel-variant="danger">
    <p style="text-align:center;margin-bottom:0px;">Supprimer définitivement <br> la plongée ?</p>
  </b-modal>
  <b-modal id="modalAddPlongee" ref="closemodal" header-bg-variant="primary"
      header-text-variant="white" centered size="md" title="Ajouter une plongée"  hide-footer>

      <ValidationObserver ref="validatorNewPlongee" class="modalForm"  reset="resetNewPlongeeForm">

        <form @submit.prevent="submitNewPlongee">
      
          <ValidationProvider class="formElem" rules="required" v-slot="{ errors }">
            <b-input type="text" v-model="formNewPlongee.name" placeholder="Nom de la plongée" :state="errors.length? false : null" />
            <span class="errors">{{ errors[0] }}</span>
          </ValidationProvider>
          <!-- <ValidationProvider class="formElem" rules="alpha_spaces|min:2" v-slot="{ errors }">
            <b-input type="text" v-model="formNewUser.lastName" placeholder="Nom" :state="errors.length? false : null" />
            <span  class="errors">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="formElem" rules="alpha_spaces|min:2" v-slot="{ errors }">
            <b-input type="text" v-model="formNewUser.firstName" placeholder="Prenom" :state="errors.length? false : null" />
            <span  class="errors">{{ errors[0] }}</span>
          </ValidationProvider> -->
          <div class="flexfooterModal">
            <Alert />
            <b-button  class="btn-success float-right" type="submit" value="ajouter" > ajouter </b-button>
          </div>
           
        </form>
      </ValidationObserver>
          
          
          
  </b-modal>
  <div class="firstPanel">

  
	<div class="row">
      <div class="col-12">
        <div class="card">
          
          <div class="card-body">
            <div class="card-title">

              <h4 >Liste des plongées </h4>
              <b-btn class="btn-outline btn-primary btn-square leftLastBtn" v-b-modal.modalAddPlongee  title="Ajouter une Plongée"> <span class="material-icons">add</span></b-btn>
              <b-btn class="btn-warning btn-square firstBtn"  v-if="!archive" @click="toogleArchive" title="Ouvrir les archives"> <span class="material-icons">inventory</span></b-btn>
              <b-btn class="btn-success btn-square" v-if="archive" @click="toogleArchive" title="Sortir des archives"> <span class="material-icons">inventory_2</span></b-btn>
              <!-- <vue-json-to-csv
              :json-data="items"
              :labels="{
              name: { title: 'Nom' },
              url: { title: 'Url du jeu' },
              urlReglement: { title: 'Url reglement' },
              description: { title: 'Téléphone' },
              description: { title: 'description' },
              huissiertext: { title: 'huissiertext' },
              dateCloture: { title: 'dateCloture' },
              dateLancement: { title: 'dateLancement' },
              dateTirage: { title: 'dateTirage' },
              valeur: { title: 'valeur' },
              winnerfirstname: { title: 'winnerfirstname' },
              winnerlastname: { title: 'winnerlastname' },
              winnercity: { title: 'winnercity' },
              winnerimageUrl: { title: 'winnerimageUrl' },
              id: { title: 'id' },
              status: { title: 'Statut' },
              }"
              :csv-title="'UserList'"
              >
              <b-btn class="btn-info btn-square" title="Télécharger au format CSV"><span class="material-icons">file_download</span></b-btn>
              </vue-json-to-csv> -->
            </div>
				
			
      
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                class="datatables"
                :items="items"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                @row-dblclicked="onDblClick"
				:borderless="false"
				:striped="true"
				:bordered="true"
				:hover="true"
				:outlined="true"
        no-border-collapse
        sticky-header="calc(100vh - 250px)"
        :busy="isBusy"
              >
              <template #table-busy>
        <div class="text-center text-info my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Chargement...</strong>
        </div>
      </template>
      <template #cell(status)="data" >

        <b-badge v-if="data.item.status =='actif'" variant="success">Actif</b-badge>
        <b-badge v-if="data.item.status =='inactif'" variant="danger">Inactif</b-badge>
        <b-badge v-if="data.item.status =='archive'" variant="warning">Archive</b-badge>
        <b-badge v-if="data.item.status =='draft'" variant="warning">Brouillon</b-badge>
        
      </template>
      <template #cell(name)="data" >
        <div class="usernamebox">
          <!-- <avatar :size="30" :username="data.item.firstName +' '+ data.item.lastName" inline></avatar>  -->
          <span class="ml-2" style="margin-right:auto;"><b>{{data.item.name}}</b></span>
          <span class="material-icons copyIcon" title="Copier l'id" @click="copyId(data.item.id)">
							content_copy
						</span>
        </div>
      </template>
      <template #cell(user)="data" >
        <div class="usernamebox">
          <span class="ml-2" style="margin-right:auto;">{{data.item.user.firstName}} <b>{{data.item.user.lastName}}</b></span>
        </div>
      </template>
      <template #cell(createdAt)="data" >
        <div class="usernamebox">
          <span class="ml-2" style="margin-right:auto;">{{$dayjs(data.item.createdAt).format('DD/MM/YYYY')}}</span>
        </div>
      </template>
      <template #cell(clubrevendeur)="data" >
        <div class="usernamebox">
          {{data.item.clubrevendeur.name}}
        </div>
      </template>
      <template #cell(partenaire)="data" >
        <div class="usernamebox">
          {{data.item.partenaire.name}}
        </div>
      </template>
			  <template #cell(actions)="data">
					<!-- <nuxt-link to="/"> -->
					
          <b-dropdown id="dropdown-1" class="dropdownIcon"
          no-caret
          variant="outlined"
          size="sm"
          :dropleft="true" 
          html="<span class='material-icons'>more_vert</span>" >
            <b-dropdown-item  v-if="data.item.status=='inactif' || data.item.status=='draft'" @click="updateStatusItem(data.item.id, 'activer')">Activer</b-dropdown-item>
            <b-dropdown-item  v-if="data.item.status=='actif'" @click="updateStatusItem(data.item.id, 'desactiver')">Désactiver</b-dropdown-item>
            <b-dropdown-item :to="'partenaires/'+data.item.id">Editer</b-dropdown-item>
            <b-dropdown-item  v-if="data.item.status=='archive'" @click="updateStatusItem(data.item.id, 'desarchiver')">Désarchiver</b-dropdown-item>
            <b-dropdown-item v-else @click="updateStatusItem(data.item.id,'archiver')">Archiver</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-b-modal.modalRemove @click="setToRemoveId(data.item.id)"><a  >Supprimer</a></b-dropdown-item>
          </b-dropdown>
					<div class="tableLineMenu">
					
						
						
					</div>
					
					
					
			</template>
			  </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
			  <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length" style="text-align:right;">
                  <label class="d-inline-flex align-items-center justify-content-center">
                    Afficher&nbsp;
                    <b-form-select
                      class="form-select form-select-sm"
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select
                    >&nbsp;lignes
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="secondPanel" >
    <NuxtChild  v-if="route.path !=='/plongees'"/>
  </div>
</div>
<!-- </transition> -->
</div>
</div>
</template>

<script setup>
//   	definePageMeta({
//   layout: "secondary"
// });
import Avatar from 'vue-avatar'
const { $store } = useNuxtApp()
const { state } = $store
const route = useRoute()
const router = useRouter()
let idToRemove= '';
let archive= false;
let self = this;
console.log('self',self);
const validatorNewPlongee= ref()
  console.log(route);
$store.dispatch('plongees/fetchPlongees',{archive:archive})

const formNewPlongee = ref({
  // emailAddress:'aaaa@gtgtgtgtgt.gt',
  // firstName:'',
  name:''
})

const removeItem = (id)=> {
		console.log('removeITEM:',id);
    idToRemove = id

}
const clickTest=function(){
  console.log('clickTest');
  console.log(this);
  console.log(this.$root);

  console.log(document.querySelector('.close-button'));
  console.log(document.querySelector('#modalAddPlongee .close'));
  document.querySelector('#modalAddPlongee .close').click()
  // $emits('bv::hide::modal',{modalAddUser})
  // this.$emit('bv::hide::modalAddUser' , modalAddUser => {
  //     console.log('Modal is about to be hidde')
  //   })
}
const toogleArchive = ()=> {
		console.log('enterArchive:');
    archive = !archive;
    $store.dispatch('plongees/fetchPlongees',{archive:archive})
}
const submitNewPlongee = async ()=> {
		console.log('submitNewPlongee:');
    // console.log('this',this);
    // this.$refs["closemodal"].$refs['close-button'].click()

    validatorNewPlongee.value.validate().then( async (success) => {
      console.log('success',success);
        if (!success) {
          return;
        }

        await $store.dispatch('plongees/createPlongee',formNewPlongee).then(function(res){

        console.log('then',res);
        if(res.err){
          console.log('err',res.err);
        }else{
          router.push(route.path + '/'+ res.id)
          document.querySelector('#modalAddPlongee .close').click()
        }
        
       })
      });
   
}
const resetNewPlongeeForm = ()=> {
		console.log('reset:');
    validatorNewPlongee.value.validate().then(success => {
      console.log('success',success);
        if (!success) {
          return;
        }

        alert('Form has been submitted!');

        // Resetting Values
         this.name = '';

        // Wait until the models are updated in the UI
        // this.$nextTick(() => {
        //   this.$refs.form.reset();
        // });
      });
}
// const exitArchive = ()=> {
// 		console.log('enterArchive:');
//     archive=false
//     $store.dispatch('jeux/fetchUsers',{archive:archive})

// }
const updateStatusItem = async (id,action)=> {
		console.log('archiveItem:',id);
		console.log('archiveItem:',action);
    const result = await $store.dispatch('plongees/updatePlongeeStatus',{id:id, action:action}).then(async function(t){
			console.log('AFTER archive');

		})

}
const desarchiveItem = async (id)=> {
		console.log('desarchiveItem:',id);
    const result = await $store.dispatch('plongees/desarchiveOnePlongee',{id:id}).then(async function(t){
			console.log('AFTER archive');

		})

}

const modalConfirmed = async function(val){
	console.log('DELETE Plongee');
  console.log('idToRemove',idToRemove);
		const result = await $store.dispatch('plongees/removeOnePlongee',{id:idToRemove}).then(async function(t){
			console.log('AFTER REMOVE');
		})
}
const setToRemoveId = (val)=> {
  idToRemove = val
}
const onDblClick = (values)=> {
  router.push(route.path + '/'+ values.id)
}
const copyId = function(val){

navigator.clipboard.writeText(val);
$store.dispatch('global/alert', {
        text: 'ID de la plongée copié',
        variant: 'success',
        countDown: 3
      }, { root: true })
}


const  fields= [
          // {
          //   key: 'name',
          //   label: 'Nom de la plongée',
          //   sortable: true,
          // },
          {
            key: 'user',
            label: 'Utilisateur',
            sortable: true,
          },
          {
            key: 'nbPlongeur',
            label: 'Plongeur',

            class:"statusCol"
          },
          {
            key: 'partenaire',
            label: 'Club',
            sortable: true,
          },
          {
            key: 'clubrevendeur',
            label: 'Club revendeur',
            sortable: true,
          },
          {
            key: 'createdAt',
            label: 'Date',
            sortable: true,
          },
          {
            key: 'status',
            label: 'Statut',
            sortable: true,
            class:"statusCol"
          },
          {
            key: 'actions',
            label: '',
            sortable: false,
            class:"actionsCol"
          }];
    



	const currentPage = computed({
		set:(val) => { $store.commit('plongees/setCurrentPage',val)},
		get:() => state.plongees.currentPage,
	})
	const perPage = computed({
		set: (val) => {$store.commit('plongees/setPerPage',val)},
		get:() =>  state.plongees.perPage
	})
	const sortBy = computed({
		set: (val) => {$store.commit('plongees/setSortBy',val)},
		get:() =>  state.plongees.sortBy
	})
	const sortDesc = computed({
		set: (val) => {$store.commit('plongees/setSortDesc',val)},
		get:() =>  state.plongees.sortDesc
	})
	const pageOptions = computed({
		get:() =>  state.plongees.pageOptions
	})
	
	const filter = computed({
		set: (val) => {$store.commit('plongees/setFilter',val)},
		get:() =>  state.plongees.filter,
	})
	const filterOn = computed({
		set: (val) => {$store.commit('plongees/setFilterOn',val)},
		get:() =>  state.plongees.filterOn,
	})
	const onFiltered= (filteredItems)=> {
      $store.commit('plongees/setTotalRows',filteredItems.length);
    };
	const items= computed({
		set: (val) => {},
		get:() =>  state.plongees.plongees,
	})
	const totalRows = computed({
		set: (val) => {$store.commit('plongees/setTotalRows',val)},
		get:() =>  state.plongees.totalRows,
	})
	const rows= computed({
		set: (val) => {$store.commit('plongees/setRows')},
		get:() =>  state.plongees.rows,
	})
	const isBusy= computed({
		set: (val) => {$store.commit('plongees/setIsBusy')},
		get:() =>  state.plongees.isBusy,
	})

</script>

<style scoped lang="less">
  @import '~static/less/variable.less';
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.usernamebox{
  display:flex;
  align-items:center;
}
.copyIcon{
		font-size:14px;
		margin-left: 10px;
		// margin-top: 5px;
		cursor: pointer;
    
	}
.containerMask{

  width: 100%;
  height: 100%;
  overflow:hidden;

.panelContainer{

  .absoluteTest{
    width:500px;
    height : 100px;
    background:teal;
    position:absolute;
    right:0px;
    top:200px;
  }
  width : 200%;
  // background:red;
  display: flex;
  flex-direction:row;
  position: relative;
  left:0% !important;

  .firstPanel{
    width:50%;
  }
    .secondPanel{
    width:50%;
  }

  &.secondary{
    width:200%;
    .firstPanel{
        opacity:0.2;
        width:50%;
    }
    .secondPanel{
      width:50%;
    }
    
  // transition:left 5sec;
    
    left:-100% !important;;
  //   animation: shake 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  // transform: translate3d(0, 0, 0);
  // backface-visibility: hidden;
  // perspective: 1000px;
 
  }

  
}
}
// .b-table-sticky-header > .table.b-table > thead > tr > th{
//   position:static;
// }
.table-responsive{
  // height:calc(100vh - 250px)
}
.table-responsive{
  // height:calc(100vh - 250px);
  border:1px solid lightgray;
  margin-bottom: 1rem !important;
  border-left:0px;
}
.b-table-sticky-header, [class*=table-responsive-]
{
  margin-bottom: 0px !important;
}
.table th, .table td{
  border:1px solid black;
  background:@primary;
}
.b-table-sticky-header > .table.b-table > thead > tr > th{
  border:2px solid black !important;
  background:@primary;
}
.card-title{display: flex;justify-content: space-between;align-items:center;padding:0 1px;
  h4{
    margin-bottom: 0;
  }
  .material-icons{
    font-size: 22px;
  }
}
.btn-square{
  width:35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
.firstBtn{
  margin-left:auto;
}
.leftLastBtn{
  margin-right:auto;
}
.modalForm{
  
  .formElem{
    position: relative;margin-bottom: 10px; display: block;
    input{}
    span.errors{
      color:red;
      font-size: 10px;
      // position: absolute;
    }
  }
}
.flexfooterModal{
  display: flex;
  justify-content: space-between;
  align-items: center;

  .float-right{ margin-left:auto}
}
</style>