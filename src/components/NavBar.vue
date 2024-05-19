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

        <div class="navbar-buttons-section ">
            <button class="btn btn-border-color">
                Top up trading balance
            </button>
            <RouterLink class="btn btn-gradient" :to="{ name: 'Wallet' }">
                My Wallet
            </RouterLink>
        </div>

        <div class="navbar-data-section">
            <p class="title">
                <i class="mark" style="background-color: rgb(101, 190, 255)"></i>
                Held in transactions balance:
            </p>
            <p class="value">
                <span>0.00</span>
                <span>USDT</span>
            </p>
        </div>

        <div class="navbar-switcher-section">
            <p class="switcher-title">
                Start Trading
            </p>
            <div class="switcher">
                <input type="checkbox" id="navbar-switcher">
                <label for="navbar-switcher"></label>
            </div>
        </div>

        <div class="navbar-navigation-section general">

            <RouterLink class="nav-item" :to="{ name: 'Dashboard' }">
                <i class="icon-dashboard"></i>
                <span>
                    Dashboard
                </span>
            </RouterLink>

            <RouterLink class="nav-item" :to="{ name: 'Account' }">
                <i class="icon-user"></i>
                <span>
                    Account
                </span>
            </RouterLink>

            <RouterLink class="nav-item" :to="{ name: 'Account' }">
                <span>
                    Active Transactions
                </span>
            </RouterLink>

        </div>


        <div class="navbar-navigation-section payment">

            <p class="navbar-navigation-title">
                PAYMENT METHODS
            </p>

            <div class="nav-drop-down drop-down" :class="{ 'active': dropDown1 }">
                <button @click="dropDown1 = !dropDown1" class="nav-item drop-down-btn">
                    <i class="icon-payment"></i>
                    <span>
                        PayIn P2P
                    </span>
                </button>
                <div class="drop-down-list">

                    <RouterLink class="item" to="{ name: 'Dashboard' }">
                        Cards
                    </RouterLink>

                    <RouterLink class="item" to="{ name: 'Dashboard' }">
                        Transaction History
                    </RouterLink>
                </div>
            </div>
        </div>
        gyuhi
        <div class="MuiBox-root css-0" style="transform: rotate(-180deg); margin-left: auto; display: flex; justify-content: center; align-items: center;"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeXl2 css-1x60hrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M3.7 7.8a1 1 0 1 0-1.4 1.4l9 8.5a1 1 0 0 0 1.4 0l9-8.5a1 1 0 1 0-1.4-1.4L12 15.6 3.7 7.8Z"></path></svg></div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            showNavBar: false,
            dropDown1: false,
        };
    },
    methods: {
        showHideNavbar() {

        }
    }
}
</script>