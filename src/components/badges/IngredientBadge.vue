<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        ingredient: String
    });
</script>

<template>
    <span class="badge bg-gray py-2 px-3 border border-secondary">{{ ingredient }}</span>
</template>