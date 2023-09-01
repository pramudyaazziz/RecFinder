<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        img: String
    });
</script>

<template>
    <div class="recipe-thumb">
        <img :src="img" alt="food-image">
    </div>
</template>

<style>
    .recipe-thumb {
        height: 18rem;
        width: 100%;
        overflow: hidden;
    }
    .recipe-thumb img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: .5rem;
    }
</style>