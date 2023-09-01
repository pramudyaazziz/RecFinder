<script setup>
    import YoutubeButton from '../components/YoutubeButton.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        instruction: String,
        youtube: String
    });
</script>

<template>
    <h2 class="fw-bold mb-3">How to cook</h2>
    <youtube-button :youtube="youtube"></youtube-button>
    <div class="mt-3">
        <p class="p-0" style="text-align: justify;">
            {{ instruction }}
        </p>
    </div>
</template>