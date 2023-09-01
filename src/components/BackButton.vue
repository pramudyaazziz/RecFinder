<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const goBack = () => {
        router.go(-1);
    }
</script>

<template>
    <div class="btn btn-danger text-white py-1 px-4" @click="goBack">
        Back
    </div>
</template>