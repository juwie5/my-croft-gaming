<template>
  <nav class="py-4 w-full bg-neutral-900 px-28 font-serif">
    <div class="flex justify-between items-center">
      <div>
        <router-link to="/">
          <img src="@/assets/media/logo/logo.svg" alt="">
        </router-link>
      </div>
      <div class="text-white">
        <ul class="flex gap-6 text-lg">
          <li>Play Now</li>
          <li>Results</li>
          <li>About Us</li>
        </ul>
      </div>
      <div class="flex gap-2">
        <router-link to="/login">
          <p class="text-white">Register / Login</p>
        </router-link>
        <img src="@/assets/media/icons/9ja.svg" alt="">
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
})
</script>

