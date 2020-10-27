<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Estamos buscando debajo de la cama</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">Acá hay mucha mugre...</h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://estaticos.serpadres.es/media/cache/1140x_thumb/uploads/images/article/5f0dd3cf5cafe82ea82b5182/monstruo-debajo-cama.jpg"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <div class="font-bold text-xl mb-2">Pero parece que no hay nada...</div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa/habitacion')"
        >
          Buscar en otro lugar
        </button>
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
