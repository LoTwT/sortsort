<script setup lang="ts">
defineProps<{ data: any }>()
</script>

<template>
  <pre class="bg-gray-100 p-4">{{ JSON.stringify(data, null, 2) }}</pre>
</template>
