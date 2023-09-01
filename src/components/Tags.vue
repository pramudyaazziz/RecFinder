<script setup>
    import { defineProps } from 'vue';
    import TagBadge from './badges/TagBadge.vue';

    const props = defineProps({
        tags: Array
    });
</script>

<template>
    <div class="tags mb-3">
        <h4 class="title-additional">Tags</h4>
        <div class="d-flex gap-3">
            <tag-badge v-for="tag in tags" :tag="tag"></tag-badge>
        </div>
    </div>
</template>

<style>
    .title-additional {
        font-size: 1.1rem;
        font-weight: bold;
    }
</style>