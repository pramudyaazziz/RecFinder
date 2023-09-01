<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        youtube: String
    });
</script>

<template>
    <a :href="youtube" target="_blank">
        <div class="text-white btn btn-danger">
            YouTube
        </div>
    </a>
</template>