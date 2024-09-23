<template>
  <div class="language-switcher">
    <UButton
    @click="switchLanguage"
    class=""
    color="indigo"
    variant="soft"
  >
    {{ $i18n.locale === 'ja' ? 'EN' : '日本語' }}
  </UButton>
  <!-- <UButton
    @click="switchLanguage"
    class=""
    color="indigo"
    variant="soft"
  >
  <NuxtLink to="/old">Old</NuxtLink>

  </UButton>
  <UButton
    @click="switchLanguage"
    class=""
    color="indigo"
    variant="soft"
  >
  <NuxtLink to="/">new</NuxtLink>

  </UButton> -->
  </div>


</template>

<script setup>
const { locale, setLocale } = useI18n()

const switchLanguage = () => {
  setLocale(locale.value === 'ja' ? 'en' : 'ja')
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1000;
}
</style>