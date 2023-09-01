<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        area: String
    });
</script>

<template>
    <span class="badge bg-danger">{{ area }}</span>
</template>