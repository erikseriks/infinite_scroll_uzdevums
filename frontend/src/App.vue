<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
