<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categoria
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCategoria">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder="Id Categoria" disabled
                                v-model='categoria.id'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Nombre: </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="name" placeholder="Nombre" 
                                v-model='categoria.name'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="descripcion" class="form-label">Descripcion : </label>
                        <div class=" input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="name" placeholder="Descripcion" 
                                v-model='categoria.description'>
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
    name: 'EditarCategoria',
    data() {
        return {
            categoria: {
                id: 0,
                name: '',
                description: ''
            }

        }
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'categorias' })
        },

        async updateCategoria() {
            const res = await axios.put(`http://127.0.0.1:8000/api/categorias/${this.categoria.id}`, this.categoria);

            if (res.status == 200) {
                this.$router.push({ name: 'categorias' })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Categoria has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.categoria.id = this.$route.params.id
        axios.get(`http://127.0.0.1:8000/api/categorias/${this.categoria.id}`)
            .then(response => {
                this.categoria = response.data.categoria;
            })
    },
}

</script>