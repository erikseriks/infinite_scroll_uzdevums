<script setup lang="ts">
import { useCharacterStore } from '@/stores/RickAndMorty/character.ts'
import { storeToRefs } from 'pinia'

const characterStore = useCharacterStore()
const { isLoading } = storeToRefs(characterStore)
</script>

<template>
  <div class="loading" v-if="isLoading">
    <h3>Loading ...</h3>
  </div>
</template>
