<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Nuevo Producto</h1>
        <div class="card">
            <div class="card-header fw-bold">Producto</div>
            <div class="card-body">
                <form @submit.prevent="createProducto">
                    <div class="row mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="tag" />
                            </div>
                            <input type="text" class="form-control" id="name" placeholder="Nombre"
                                v-model="producto.name"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="price" class="form-label">Precio</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="dollar-sign" />
                            </div>
                            <input type="number" class="form-control" id="price" placeholder="Precio"
                                v-model="producto.price" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="stock" class="form-label">Stock</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="boxes" />
                            </div>
                            <input type="number" class="form-control" id="stock" placeholder="Stock"
                                v-model="producto.stock" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="category_id" class="form-label">Categoría</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="folder" />
                            </div>
                            <select class="form-select" id="category_id" v-model="producto.category_id">
                                <option v-for="categoria in categorias" :value="categoria.id">{{ categoria.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">Agregar</button>
                    <button type="button" class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'NewProducto',
    data() {
        return {
            producto: {
                name: '',
                price: 0,
                stock: 0,
                category_id: ''
            },
            categorias: [],
            errorMessage: ''
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'productos' });
        },
        async createProducto() {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/productos', this.producto);
                if (res.status === 201) {
                    this.$router.push({ name: 'productos' });
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Producto creado exitosamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    this.errorMessage = 'El nombre del producto ya existe.';
                } else {
                    this.errorMessage = 'Ocurrió un error al crear el producto.';
                }
            }
        },
        async loadCategorias() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categorias');
                this.categorias = response.data.categorias;
            } catch (error) {
                this.errorMessage = 'Ocurrió un error al cargar las categorías.';
            }
        }
    },
    mounted() {
        this.loadCategorias();
    }
}
</script>