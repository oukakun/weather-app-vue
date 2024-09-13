<template>
  <div class="container mx-auto">
    <LanguageSwitcher />
    <slot />
  </div>
</template>

<script setup>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
</script>