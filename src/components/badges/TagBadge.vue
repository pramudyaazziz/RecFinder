<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        tag: String
    });
</script>

<template>
    <span class="badge bg-primary">{{ tag }}</span>
</template>