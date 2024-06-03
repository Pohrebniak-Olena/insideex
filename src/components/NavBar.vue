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

            <RouterLink class="nav-item" :to="{ name: 'ActiveTrans' }">
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

                    <RouterLink class="item" :to="{ name: 'Cards' }">
                        Cards
                    </RouterLink>

                    <RouterLink class="item" :to="{ name: 'Dashboard' }">
                        Transaction History
                    </RouterLink>
                </div>
            </div>


            <div class="nav-drop-down drop-down" :class="{ 'active': dropDown2 }">
                <button @click="dropDown2 = !dropDown2" class="nav-item drop-down-btn">
                    <i class="icon-blocks"></i>
                    <span>
                        PayIn QAC
                    </span>
                </button>
                <div class="drop-down-list">

                    <RouterLink class="item" to="{ name: 'Dashboard' }">
                        Terminals
                    </RouterLink>

                    <RouterLink class="item" to="{ name: 'Dashboard' }">
                        Transaction History QAC
                    </RouterLink>
                </div>
            </div>


            <div class="nav-drop-down drop-down" :class="{ 'active': dropDown3 }">
                <button @click="dropDown3 = !dropDown3" class="nav-item drop-down-btn">
                    <i class="icon-payment"></i>
                    <span>
                        PayOut
                    </span>
                </button>
                <div class="drop-down-list">
                </div>
            </div>



        </div>

        <div class="navbar-buttons-section">
            <button class="btn-exit">
                <i class="icon-exit"></i>
                <span>Exit</span>
            </button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            showNavBar: false,
            dropDown1: false,
            dropDown2: false,
            dropDown3: false,
        };
    },
    methods: {
        showHideNavbar() {

        }
    }
}
</script>