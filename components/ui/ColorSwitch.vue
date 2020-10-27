<template>
  <div class="text-sm">
    <IconDark
      v-if="$colorMode.value === 'light'"
      @click="changeTheme('dark')"
    />
    <IconLight v-else @click="changeTheme('light')" />
  </div>
</template>

<script>
export default {
  name: 'ColorSwitch',
  components: {
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
    IconLight: () => import('@/assets/icons/light.svg?inline'),
  },
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme;
    },
  },
};
</script>
