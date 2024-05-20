<template>
    <div class="container"> 
        <h1 class="text-start">Listado Productos 
            <button @click="newProducto()"
                    class="btn btn-success mx-2">
                    <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto, index) in productos" :key="index">
                    <th scope="row">{{ producto.id }}</th>
                    <td>{{ producto.name}}</td>
                    <td>{{ producto.price}}</td>
                    <td>{{ producto.stock }}</td>
                    <td>{{ producto.category_name }}</td>
                    

                    <td>
                        <button @click="deleteProducto(producto.id)"
                            class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>

                        <button @click="editProducto(producto.id)"
                            class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: 'Producto',
    data() {
        return {
            productos: []
        }
    },
    methods: {
        deleteProducto(codigo){
            Swal.fire({
                title: `Do you want to delete the Producto with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) =>{
                if(result.isConfirmed){
                    axios.delete(`http://127.0.0.1:8000/api/productos/${codigo}`)
                    .then(response =>{
                        if (response.data.success) {
                            Swal.fire('Deleted!!','', 'success');
                            this.productos = this.productos.filter(pro => pro.id !== codigo);
                        }
                    })
                }
            })
        },

        editProducto(id){
            this.$router.push({name: 'EditarProducto', params: {id: `${id}`}});
        },
        newProducto(){
            this.$router.push({name: 'NewProducto'});
        }
    },
    mounted() {
        axios
            .get(`http://127.0.0.1:8000/api/productos`)
            .then(response => {
            
                this.productos = response.data.productos;
            })
    },
}
</script>