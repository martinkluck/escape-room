<template>
  <header class="dark:text-white dark:bg-blue-main-800">
    <nuxt-link class="flex items-center" to="/">
      <LogoIcon class="w-8 mr-3" />
      <h1 class="font-bold text-base">Escape Room</h1>
    </nuxt-link>
    <nuxt-link class="hidden md:block" to="/profile">
      <img
        src="@/assets/icons/profile.svg"
        alt="Imagen del usuario"
        class="w-10 rounded-full"
      />
    </nuxt-link>
    <!-- <ColorSwitch class="w-8" /> -->
  </header>
</template>

<script>
export default {
  components: {
    LogoIcon: () => import('@/assets/icons/home.svg?inline'),
  },
};
</script>

<style scoped>
header {
  @apply flex items-center justify-between p-4;

  height: var(--height);
}
</style>
