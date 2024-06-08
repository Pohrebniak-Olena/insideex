<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import TradingBalance from './components/pop-up/TradingBalance.vue'
import Withdraw from './components/pop-up/Withdraw.vue'
import QR from './components/pop-up/QR.vue'

// import NotificationList from './components/notifications/NotificationList.vue';
</script>

<template>

  <SideBar v-if="showSideBar"/>
  <TradingBalance v-if="popUpTradingBalance" />
  <Withdraw v-if="popUpWithdraw" />
  <QR v-if="popUpQR" />

  <div class="wrapper">
    <NavBar />

    <div class="wrapper-view">
      <HeaderComponent />
      <router-view></router-view>
    </div>
  </div>
  <footer>
    <p>version 0.1.0</p>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(["popUpTradingBalance", "popUpQR", "popUpWithdraw", "showSideBar"]),
  },
  methods: {
  }
}
</script>