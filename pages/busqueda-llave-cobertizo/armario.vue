<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">Deberíamos buscar donde podría estar la llave</h4>
      <img
        v-if="open"
        src="https://s3.eu-central-1.amazonaws.com/cdnm.westwing.com/glossary/uploads/es/2014/08/Westwing_Du_Bout_du_Monde_FINAL_10.jpg"
        alt=""
        class="my-5 max-h-5"
      />
      <img
        v-if="!open"
        src="https://politify.us/wp-content/uploads/2018/11/reciclar-muebles-antiguos-y-darles-una-nueva-vida.gif"
        alt=""
        class="my-5 max-h-5"
      />
      <div class="px-2 mt-6">
        <div class="flex flex-col justify-center">
          <div v-if="!open" class="w-1/1 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="open = !open"
              >
                Abrir armario
              </button>
            </div>
          </div>
          <div v-if="open" class="w-1/1 px-2">
            <div class="flex flex-col">
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
              >
                Esta es la pista para la llave
              </div>
            </div>
          </div>
          <div class="w-1/1 px-2">
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
      open: false,
    };
  },
  head: {
    title: 'Armario',
  },
};
</script>
