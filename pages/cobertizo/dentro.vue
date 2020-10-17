<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Dentro del cobertizo</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">
          Este barco esta muy viejo, hay que ver si realmente funciona...
        </h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://img.ar.class.posot.com/es_ar/2018/03/19/Bote-lagunero-completo-20180319040642.jpg"
            alt=""
            class="my-5 max-w-xl"
          />
        </div>
      </div>
      <div
        v-if="!arranca && !faltaCombustible"
        class="text-center px-4 py-2 m-2"
      >
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="arranca = true"
        >
          Revisar si el motor arranca
        </button>
      </div>
      <div v-if="arranca" class="text-center px-4 py-2 m-2">
        <div
          v-if="averia"
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
        >
          Por lo que veo el motor no tiene ninguna avería...
        </div>
        <div
          v-else
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
        >
          El motor no arranca, hay ver que es lo que sucede...
        </div>
      </div>
      <div v-if="arranca" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="averia = !averia"
        >
          Revisar si el motor tiene alguna falla
        </button>
      </div>
      <div v-if="arranca" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="revisarCombustible"
        >
          Revisar si el motor le falta combustible
        </button>
      </div>
      <div
        v-if="!arranca && faltaCombustible"
        class="text-center px-4 py-2 m-2"
      >
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
        >
          Pareciera ser que no tiene combustible... Revisemos el cobertizo...
        </div>
        <div class="grid grid-cols-1 place-content-center">
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded"
            @click="$router.push('/cobertizo/armario')"
          >
            Revisar armario</button
          ><button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded"
            @click="encontrarCombustible"
          >
            Revisar estanterías
          </button>
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
      averia: false,
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
