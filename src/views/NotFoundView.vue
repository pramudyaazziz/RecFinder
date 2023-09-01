<script setup>
import HeaderApp from '../components/Header.vue';
import { useNavigationStore } from '../stores/navigation';

const { setNavigation } = useNavigationStore();

setNavigation(false);
</script>

<template>
    <div class="container">
        <header-app></header-app>
        <div class="d-flex flex-column align-items-center justify-content-center text-secondary">
            <h1 class="fw-bold" style="font-size: 5rem;">404</h1>
            <h5 style="font-size: 2rem;">Not Found</h5>
            <p>You just visited the wrong page</p>
            <div class="mt-3">
                <a href="/" class="btn btn-danger text-white">Go Home</a>
            </div>
        </div>
    </div>
</template>