<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">
        Este barco esta muy viejo, hay que ver si realmente funciona...
      </h4>
      <img
        src="https://img.ar.class.posot.com/es_ar/2018/03/19/Bote-lagunero-completo-20180319040642.jpg"
        alt=""
        class="my-5"
      />
      <div class="px-2 mt-6">
        <div class="flex mx-2">
          <div class="w-1/1 px-2">
            <div v-if="!arranca && !faltaCombustible" class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="arranca = true"
              >
                Revisar si el motor arranca
              </button>
            </div>
            <div v-if="arranca" class="flex flex-col">
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
              >
                El motor no arranca, hay ver que es lo que sucede...
              </div>
            </div>
            <div v-if="arranca" class="w-1/2 px-2">
              <div class="flex flex-col">
                <button
                  class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Revisar si el motor tiene alguna falla
                </button>
              </div>
            </div>
            <div v-if="arranca" class="w-1/2 px-2">
              <div class="flex flex-col">
                <button
                  class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  @click="revisarCombustible"
                >
                  Revisar si el motor le falta combustible
                </button>
              </div>
            </div>
            <div v-if="!arranca && faltaCombustible" class="w-1/1 px-2">
              <div class="flex flex-col">
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
                >
                  Pareciera ser que no tiene combustible... Revisemos el
                  cobertizo...
                </div>
                <div class="w-1/2 px-2">
                  <div class="flex flex-col">
                    <button
                      class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Revisar armario
                    </button>
                  </div>
                </div>
                <div class="w-1/2 px-2">
                  <div class="flex flex-col">
                    <button
                      class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      @click="encontrarCombustible"
                    >
                      Revisar estanterías
                    </button>
                  </div>
                </div>
              </div>
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
      arranca: false,
      faltaCombustible: false,
    };
  },
  methods: {
    revisarCombustible() {
      this.faltaCombustible = true;
      this.arranca = false;
    },
    encontrarCombustible() {},
  },
  head: {
    title: 'Dentro del cobertizo',
  },
};
</script>
