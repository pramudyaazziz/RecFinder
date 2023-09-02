<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        text: String,
        result: Number,
        keyword: String
    });
</script>

<template>
    <div class="pt-3 pb-3 text-secondary fs-5 d-flex justify-content-between">
        <div class="keyword">
            {{text}} <span class="text-white fw-bold">{{ keyword }}</span>
        </div>
        <div class="search-result">
            Result: <span class="text-white fw-bold">{{ result }}</span>
        </div>
    </div>
</template>