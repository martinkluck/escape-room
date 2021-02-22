<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <UiColorSwitch class="w-5" />
    </div>
    <h1 class="text-center text-3xl font-bold">Escape Room</h1>
    <div
      v-if="!token"
      class="login-body mt-12 pt-56 h-full flex flex-col items-center bg-gray-main-300 dark:bg-blue-main-800"
    >
      <AuthSocialLoginButton
        type="google"
        text="Inicio de sesión con google"
        @click="loginWithGoogle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      token: null,
    };
  },
  head: {
    title: 'Login',
  },
  methods: {
    async loginWithGoogle() {
      try {
        const provider = new this.$fireModule.auth.GoogleAuthProvider();
        const result = await this.$fire.auth.signInWithPopup(provider);
        // eslint-disable-next-line no-console
        console.log(result);
        this.token = result.credential.idToken;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
  },
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
