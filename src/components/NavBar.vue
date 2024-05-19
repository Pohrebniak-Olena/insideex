<script setup>
import '@/assets/styles/_navbar.scss'
</script>

<template>
    <div class="navbar">

        <div class="navbar-header">
            <div class="navbar-logo">
                <i class="icon-logo">

                </i>
                Inside<span
                    style="background: linear-gradient(to left, rgb(104, 79, 221), rgb(47, 146, 172)) text; color: transparent; display: inline-block;">Ex</span>
            </div>
            <button class="navbar-button" @click="showHideNavbar()">
                <i class="icon-navbar-button"></i>
            </button>
        </div>

        <div class="navbar-data-section">
            <p class="title">
                <i class="mark" style="background-color: rgb(73, 80, 87);"></i>
                Balance:
            </p>
            <p class="value">
                <span>0.00</span>
                <span>USDT</span>
            </p>
        </div>

        <div class="navbar-data-section">
            <p class="title">
                <i class="mark" style="background-color: rgb(148, 126, 254);"></i>
                Trading balance:
            </p>
            <p class="value">
                <span>0.00</span>
                <span>USDT</span>
            </p>
        </div>

        <div class="navbar-data-section">
            <p class="title">
                <i class="mark" style="background-color: rgb(148, 126, 254);"></i>
                Trading balance:
            </p>
            <p class="value">
                <span>0.00</span>
                <span>USDT</span>
            </p>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            showNavBar: false,
        };
    },
    methods: {
        showHideNavbar() {

        }
    }
}
</script>