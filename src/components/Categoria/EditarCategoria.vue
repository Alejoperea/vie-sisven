<script setup lang="ts">
import Categorias from '@/views/Categorias.vue';
</script>

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
                            <div class="input-group-text"><font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="id" placeholder="Id Categoria" disabled
                                v-model='Categoria.id'
                            >   
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>