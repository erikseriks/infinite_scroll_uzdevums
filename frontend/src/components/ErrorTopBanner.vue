<script setup lang="ts">
import { useCharacterStore } from '@/stores/RickAndMorty/character.ts'
import { storeToRefs } from 'pinia'

const characterStore = useCharacterStore()
const { hasError, response } = storeToRefs(characterStore)
</script>

<template>
  <div class="error" v-if="hasError && response?.error">
    <h3>{{ response.error }}</h3>
  </div>
</template>
