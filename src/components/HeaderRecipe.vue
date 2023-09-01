<script setup>
    import { defineProps } from 'vue';
    import AreaBadge from './badges/AreaBadge.vue';
    import BackButton from '../components/BackButton.vue';

    const props = defineProps({
        titleFood: String,
        areaFood: String
    });
</script>

<template>
    <div class="d-md-flex justify-content-between align-items-center flex-row-reverse">
        <div class="mb-md-0 my-2 text-end">
            <back-button></back-button>
        </div>
        <div class="d-md-flex align-items-center">
            <h1 class="text-secondary fw-bold m-0 me-3 food-title">{{ titleFood }}</h1>
            <div>
                <area-badge :area="areaFood"></area-badge>
            </div>
        </div>
    </div>
</template>

<style>
    .food-title {
        font-size: 2.3rem;
    }
</style>