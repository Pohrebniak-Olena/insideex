<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavBar from './components/NavBar.vue';

// import FooterComponent from './components/FooterComponent.vue';
// import NotificationList from './components/notifications/NotificationList.vue';
</script>

<template>
<div class="wrapper">
  <NavBar />

  <div class="wrapper-view">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</div>
</template>