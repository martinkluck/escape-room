<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_885755-MLA43311544079_082020-V.jpg"
        alt=""
        class="my-5 w-15"
      />
      <div class="px-2 mt-6">
        <div class="flex flex-col">
          <div class="w-1/1 px-2">
            <div class="flex flex-col">
              <h3 v-if="message">{{ message }}</h3>
            </div>
          </div>
          <div v-if="pista" class="w-1/1 px-2">
            <div class="flex flex-col">
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
              >
                Esta es la pista para la llave
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="message = 'Primer cajon: No hay nada'"
              >
                Primer cajon
              </button>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="message = 'Segundo cajon: No hay nada'"
              >
                Segundo cajon
              </button>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="abrirPista"
              >
                Tercer cajon
              </button>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo')"
              >
                Volver al living
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      pista: false,
    };
  },
  methods: {
    abrirPista() {
      this.message = '';
      this.pista = true;
    },
  },
  head: {
    title: 'Cajones',
  },
};
</script>
