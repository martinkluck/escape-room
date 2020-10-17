<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Puerta del cobertizo</h1>
      </div>
      <div class="text-center px-4 py-2 m-2 max-w-xl">
        <h4 v-if="havePassword">Ahora creo que tenemos la contraseña...</h4>
        <h4 v-else>
          Llegamos a la puerta del cobertizo y vemos que tiene una llave, creo
          que vamos a tener que volver a la casa a buscarla...
        </h4>
      </div>

      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://p0.pikist.com/photos/743/453/latch-door-latch-fastening-fasten-secure-close-hold-wood-wooden-door.jpg"
            alt=""
            class="my-5 max-w-xl sm:max-w-xs"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        Ingresar contraseña
        <input v-model="password" type="password" class="text-black" />
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="checkPassword"
        >
          Revisar contraseña
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="volverACasa"
        >
          Volver a la casa
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      password: '',
      valid: 'asucena',
    };
  },
  computed: {
    ...mapGetters(['getSeenShed', 'getPartOneKeyFound', 'getPartTwoKeyFound']),
    havePassword() {
      return this.getPartOneKeyFound && this.getPartTwoKeyFound;
    },
  },
  methods: {
    ...mapActions(['setSeenShed']),
    checkPassword() {
      if (this.password === this.valid) {
        this.$router.push('/cobertizo/dentro');
      }
    },
    volverACasa() {
      if (!this.getSeenShed) {
        this.setSeenShed(!this.getSeenShed);
      }
      this.$router.push('/casa');
    },
  },
  head: {
    title: 'Puerta cobertizo',
  },
};
</script>
