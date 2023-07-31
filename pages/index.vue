<template>
  <div>
    <test-form-with-text-field />
    <v-btn @click="koClick">한글</v-btn>
    <v-btn @click="enClick">영어</v-btn>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const koClick = () => {
  i18n.locale.value = 'ko'
}
const enClick = () => {
  i18n.locale.value = 'en'
}
</script>
<style scoped></style>
