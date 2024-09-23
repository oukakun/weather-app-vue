<template>
  <div class="layout-container">
    <LanguageSwitcher />
    <slot />
  </div>
</template>

<script setup>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
</script>

<style scoped>
.layout-container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: seagreen;
  background: url("/assest/images/background.jpg");
  background-size: cover;
  background-position: center;
}
</style>