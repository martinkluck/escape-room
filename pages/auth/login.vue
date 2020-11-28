<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <ColorSwitch class="w-5" />
    </div>
    <h1 class="text-center text-3xl font-bold">Escape Room</h1>
    <div
      class="login-body mt-12 pt-56 h-full flex flex-col items-center bg-gray-main-300 dark:bg-blue-main-800"
    >
      <SocialLoginButton type="google" text="Inicio de sesión con google" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
};
</script>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>
