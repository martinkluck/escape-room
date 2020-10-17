<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://image.freepik.com/foto-gratis/antigua-cocina-oscura-casa-abandonada_32342-764.jpg"
        alt=""
        class="my-5"
      />
      <div class="px-2 mt-6">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/alacena')"
              >
                Revisar alacena
              </button>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/cajones')"
              >
                Revisar cajones
              </button>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo')"
              >
                Buscar en otro lugar
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
  head: {
    title: 'Cocina',
  },
};
</script>
