<template>
  <UButton
    @click="switchLanguage"
    class="language-switcher"
    color="indigo"
    variant="soft"
  >
    {{ $i18n.locale === 'zh' ? 'EN' : '中文' }}
  </UButton>
</template>

<script setup>
const { locale, setLocale } = useI18n()

const switchLanguage = () => {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
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