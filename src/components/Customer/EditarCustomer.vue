<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Customer
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCustomer">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder="Id Customer" disabled
                                v-model='customer.id'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="document_number" class="form-label">Número de documento: </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                            <input type="number" class="form-control" id="document_number" placeholder="Número de documento" 
                                v-model='customer.document_number'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="first_name" class="form-label">Nombre: </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                            <input type="text" class="form-control" id="first_name" placeholder="Nombres" 
                                v-model='customer.first_name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="last_name" class="form-label">Apellidos: </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                            <input type="text" class="form-control" id="last_name" placeholder="Apellidos" 
                                v-model='customer.last_name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="address" class="form-label">Direccion : </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="home" /></div>
                            <input type="text" class="form-control" id="address" placeholder="direccion" 
                                v-model='customer.address'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="birthday" class="form-label">Fecha nacimiento: </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="calendar-alt" /></div>
                            <input type="date" class="form-control" id="birthday" placeholder="direccion" 
                                v-model='customer.birthday'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone_number" class="form-label">Telefono : </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="home" /></div>
                            <input type="number" class="form-control" id="phone_number" placeholder="Telefono" 
                                v-model='customer.phone_number'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="email" class="form-label">Email : </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="home" /></div>
                            <input type="text" class="form-control" id="email" placeholder="Email" 
                                v-model='customer.email'>
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'


export default {
    name: 'EditarCustomer',
    data() {
        return {
            customer: {
                id: 0,
                document_number: '',
                first_name: '',
                last_name: '',
                address: '',
                birthday: '',
                phone_number: '',
                email: ''
            }

        }
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'customers' })
        },

        async updateCustomer() {
            const res = await axios.put(`http://127.0.0.1:8000/api/customers/${this.customer.id}`, this.customer);

            if (res.status == 200) {
                this.$router.push({ name: 'customers' })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Customer has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.customer.id = this.$route.params.id
        axios.get(`http://127.0.0.1:8000/api/customers/${this.customer.id}`)
            .then(response => {
                this.customer = response.data.customer;
            })
    },
}

</script>