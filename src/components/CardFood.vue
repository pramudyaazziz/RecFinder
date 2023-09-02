<script setup>
    import { RouterLink } from 'vue-router';
    import { defineProps } from 'vue';
    import AreaBadge from './badges/AreaBadge.vue';

    const props = defineProps({
        data: Object
    });
</script>

<template>
    <div class="col-6 col-md-4 col-lg-2">
        <router-link :to="'/recipe/' + data.id" class="d-flex flex-column food-card bg-navy">
            <div class="food-card-img">
                <img :src="data.img">
            </div>
            <div class="food-card-body p-2">
                <p class="p-0">{{ data.title }}</p>
                <area-badge :area="data.area"></area-badge>
            </div>
        </router-link>
    </div>
</template>

<style>
    .food-card {
        overflow: hidden;
        color: white;
        height: 20rem;
        border-radius: .5rem;
        text-decoration: none;
    }
    .food-card img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        flex: 1;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }
    .food-card .food-card-img {
        flex: 1;
    }
    .food-card .food-card-body {
        min-height: 30%;
        font-weight: bold;
    }
</style>