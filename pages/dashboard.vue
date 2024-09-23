<template>
  <div>
    <h1>User Details</h1>
    <div v-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else-if="user">
      <p>Name: {{ user }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>

const { data, error } = await useFetch('/api/auth/user', {
  credentials: 'include',
});

const user = ref(data.value.user);
</script>