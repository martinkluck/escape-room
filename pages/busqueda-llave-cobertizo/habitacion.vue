<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://images.fineartamerica.com/images-medium-large-5/old-room-abandoned-places-room-with-a-bed-gary-heller.jpg"
        alt=""
        class="my-5"
      />
      <div class="px-2 mt-6">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/armario')"
              >
                Revisar armario
              </button>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/cama')"
              >
                Revisar debajo de la cama
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
    title: 'Habitación',
  },
}
</script>
