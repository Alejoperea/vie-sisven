
<template>
    <div class="container text-start">
       <h1 class="text-primary fw-bold">New Paymode</h1>
       <div class="card">
           <div class="card-header fw-bold">
               Paymode
           </div>
           <div class="card-body">
               <form @submit.prevent="savePaymode">
                   <div class="row mb-3">
                       <label for="id" class="form-label">Codigo</label>
                       <div class="input-group">
                           <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                           <input type="text" class="form-control" id="id" placeholder="Id Categoria" disabled
                               v-model='paymode.id'>
                       </div>
                   </div>

                   <div class="row mb-3">
                       <label for="name" class="form-label">Nombre: </label>
                       <div class=" input-group">
                           <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                           <input type="text" class="form-control" id="name" placeholder="Nombre" 
                               v-model='paymode.name'>
                       </div>
                   </div>

                   <div class="row mb-3">
                       <label for="observation" class="form-label">Observation : </label>
                       <div class=" input-group">
                           <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                           <input type="text" class="form-control" id="name" placeholder="Observation" 
                               v-model='paymode.observation'>
                       </div>
                   </div>

                   <button class="btn btn-primary" type="submit">Save</button>
                   <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
               </form>
           </div>
       </div>
   </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'


export default {
   name: 'NewPaymode',
   data() {
       return {
           paymode: {
               id: 0,
               name: '',
               observation: ''
           }
           
       }
   },
   methods: {
       cancel() {
           this.$router.push({ name: 'paymodes' })
       },

       async savePaymode() {
           const res = await axios.post(`http://127.0.0.1:8000/api/paymodes`, this.paymode);
           console.log(res)

           if(res.status == 200){
               this.$router.push({name: 'paymodes'})
               Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Paymode has been saved',
                   showConfirmButton: false,
                   timer: 2000
               })
           }
       }
   }
   // ,
   // mounted() {
      
   //     axios.get(`http://127.0.0.1:8000/api/categorias`)
   //     .then(response => {
   //         this.categoria = response.data.categoria
   //     })
   // },
}

</script>