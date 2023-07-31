<template>
  <VeeForm ref="form" :validation-schema="schema">
    <VeeField
      v-slot="{ errors, handleChange, handleBlur }"
      name="email"
      :rules="{
        required: i18n.t('messages.required'),
        email: i18n.t('messages.email')
      }"
    >
      <v-text-field
        v-model="email"
        :label="i18n.t('email')"
        :name="i18n.t('email')"
        :error-messages="errors"
        @blur="handleBlur"
        @update:modelValue="handleChange"
      />
    </VeeField>
    <v-btn type="submit">검증</v-btn>
  </VeeForm>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const form = ref<any>(null)
const email = ref<string>('')
const schema = {
  email: 'email|required'
}
</script>
