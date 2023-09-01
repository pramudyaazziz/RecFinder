<script setup>
    import { defineProps } from 'vue';
    import IngredientBadge from './badges/IngredientBadge.vue';

    const props = defineProps({
        ingredients: Array
    });
</script>

<template>
    <div class="ingredient">
        <h3 class="title-ingredient">Ingredients</h3>
        <div class="d-flex flex-wrap gap-3">
            <ingredient-badge v-for="ingredient in ingredients" :ingredient="ingredient"></ingredient-badge>
        </div>
    </div>
</template>

<style>
    .title-ingredient {
        font-size: 1.6rem;
        font-weight: bold;
    }
</style>