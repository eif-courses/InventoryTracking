<template>
  <div>
    <h1>User Details</h1>

    <div v-if="user">
      <p>Name: {{ user }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const authStore = useUserStore()
const user = computed(() => authStore.user);

</script>