<script setup>
    import { RouterLink } from 'vue-router';
    import { defineProps } from 'vue';

    const props = defineProps({
        category: Object,
    });

</script>

<template>
    <div class="col-6 col-md-4 col-lg-2 mt-4 mb-4">
        <router-link :to="'/category/' + category.name" class="d-flex flex-column food-category overflow-hidden">
            <div class="food-category-img">
                <img :src="category.img">
            </div>
            <div class="text-center mt-3 mb-3">
                <span class="badge bg-navy text-white pt-2 pb-2 ps-3 pe-3 border border-secondary">{{ category.name }}</span>
            </div>
        </router-link>
    </div>
</template>

<style>
    .food-category img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>