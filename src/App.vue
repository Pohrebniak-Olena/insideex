<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
// import FooterComponent from './components/FooterComponent.vue';
// import NotificationList from './components/notifications/NotificationList.vue';
</script>

<template>
<div class="wrapper">
  <div class="wrapper-view">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</div>
</template>