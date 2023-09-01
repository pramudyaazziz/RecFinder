<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        category: String
    });
</script>

<template>
    <span class="badge bg-success">{{ category }}</span>
</template>