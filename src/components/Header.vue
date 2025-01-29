<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { LucideMenu } from "lucide-vue-next"
</script>

<template>
  <header class="flex justify-between px-4 py-4 border-b border-black bg-white">
    <slot name="school-logo" />
    <Button variant="ghost">
      <LucideMenu :size="4" />
      <span>Menü</span>
    </Button>
  </header>
</template>

<style scoped>

</style>