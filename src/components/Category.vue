<script setup>
    import { defineProps } from 'vue';
    import CategoryBadge from './badges/CategoryBadge.vue';

    const props = defineProps({
        category: String
    });
</script>

<template>
    <div class="category mb-3">
        <h4 class="title-additional">Category</h4>
        <category-badge :category="category"></category-badge>
    </div>
</template>