<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://estaticos.serpadres.es/media/cache/1140x_thumb/uploads/images/article/5f0dd3cf5cafe82ea82b5182/monstruo-debajo-cama.jpg"
        alt=""
        class="my-5 max-w-2xl"
      />
      <div class="px-2 mt-6">
        <div class="flex flex-col justify-items-center">
          <div class="w-1/1 px-2">
            <div class="flex flex-col">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Acá no hay nada</div>
                  <p class="text-gray-700 text-base">Sigamos buscando</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/1 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/habitacion')"
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
    title: 'Debajo de la cama',
  },
};
</script>
