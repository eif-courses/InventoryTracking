<script setup lang="ts">

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (isMenuOpen.value && !target.closest('.mobile-menu') && !target.closest('button')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const links = [
  {
    label: 'Pagrindinis',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Valdymo skydas',
    icon: 'icon-park-twotone:hand-painted-plate',
    to: '/dashboard'
  },
  {
    label: 'Prisijungti',
    icon: 'mdi:login',
    to: '/login'
  }
]
</script>

<template>
  <UContainer class="w-full mx-auto">
    <header class="w-full">
      <nav class="w-full flex items-center justify-between p-4">
        <div class="text-lg font-bold">
          <NuxtLink to="/">VikoSoftware</NuxtLink>
        </div>

        <div class="hidden md:flex items-center justify-center space-x-8">
          <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800"/>
          <ColorThemeButtonViko/>
        </div>

        <button class="block md:hidden" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </nav>

      <transition name="slide-down">
        <div
            v-if="isMenuOpen"
            class="mobile-menu md:hidden flex flex-col items-start justify-start w-full bg-gray-100 dark:bg-gray-800 absolute top-16 left-0 px-4 py-4 z-10 shadow-md"
        >
          <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              @click.native="closeMenu"
              class="py-2 w-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-2 rounded-md"
              active-class="bg-gray-300 dark:bg-gray-700"
          >
            <i :class="link.icon" class="mr-2"></i>{{ link.label }}
          </NuxtLink>
        </div>
      </transition>
    </header>

    <main class="w-full flex justify-center items-center">
      <slot/>
    </main>
  </UContainer>
</template>


<style scoped>
</style>
