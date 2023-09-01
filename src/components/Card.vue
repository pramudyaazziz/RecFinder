<template>
    <div class="col-6 col-md-4 col-lg-2">
        <div class="d-flex flex-column food-card bg-navy">
            <div class="food-card-img">
                <img src="https://www.shutterstock.com/image-photo/thai-food-salted-fish-spicy-260nw-148689017.jpg" alt="food_thumb">
            </div>
            <div class="food-card-body p-2">
                <p class="p-0">Teriyaki Chicken Casserole</p>
                <span class="badge bg-danger">Japanese</span>
            </div>
        </div>
    </div>
</template>

<style>
    .food-card {
        overflow: hidden;
        color: white;
        height: 20rem;
        border-radius: .5rem;
    }
    .food-card img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        flex: 1;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }
    .food-card .food-card-img {
        flex: 1;
    }
    .food-card .food-card-body {
        min-height: 30%;
        font-weight: bold;
    }
</style>