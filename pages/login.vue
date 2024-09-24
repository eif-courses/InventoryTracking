<script setup lang="ts">

import AuthFormViko from "~/components/AuthFormViko.vue";

const res = useCookie<string>('authToken')
console.log(res)
</script>

<template>

  <AuthFormViko/>
</template>