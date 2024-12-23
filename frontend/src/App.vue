<script setup lang="ts">
import { RouterView } from 'vue-router'
import ErrorTopBanner from '@/components/ErrorTopBanner.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
</script>

<template>
  <error-top-banner />
  <RouterView />
  <loading-indicator />
</template>
