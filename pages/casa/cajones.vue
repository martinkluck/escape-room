<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Cajones de la cocina</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">
          Mmm en cual de los cajones podremos encontrar algo?
        </h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_885755-MLA43311544079_082020-V.jpg"
            alt=""
            class="my-5 max-w-xl"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h3 v-if="message">{{ message }}</h3>
      </div>
      <div v-if="getPartOneKeyFound" class="text-center px-4 py-2 m-2">
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
        >
          La
          <strong style="font-family: monospace !important">CENA</strong>
          siempre estaba lista cuando mama llamaba a comer.
        </div>
      </div>
      <div v-if="!getPartOneKeyFound" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="message = 'Primer cajon: No hay nada'"
        >
          Primer cajon
        </button>
      </div>
      <div v-if="!getPartOneKeyFound" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="message = 'Segundo cajon: No hay nada'"
        >
          Segundo cajon
        </button>
      </div>
      <div v-if="!getPartOneKeyFound" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="abrirPista"
        >
          Tercer cajon
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa')"
        >
          Volver al living
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
      message: '',
      pista: false,
    };
  },
  computed: {
    ...mapGetters(['getPartOneKeyFound', 'getPartTwoKeyFound']),
    havePassword() {
      return this.getPartOneKeyFound && this.getPartTwoKeyFound;
    },
  },
  methods: {
    ...mapActions(['setPartOneKeyFound']),
    abrirPista() {
      this.message = '';
      this.setPartOneKeyFound(true);
    },
  },
  head: {
    title: 'Cajones',
  },
};
</script>
