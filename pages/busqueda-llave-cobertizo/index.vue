<template>
  <div class="container">
    <div class="justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4>Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://pbs.twimg.com/media/EFZ3UeuW4AAK4dh.jpg"
        alt=""
        class="my-5"
      />
      <div class="px-5">
        <div class="flex -mx-2 flex-wrap">
          <div class="w-1/2 px-2">
            <div class="flex flex-col">
              ¿Estará en la cocina?
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/cocina')"
              >
                Ir a la cocina
              </button>
            </div>
          </div>
          <div class="w-1/2 px-2">
            <div class="flex flex-col">
              ¿Estará en la habitación?
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/habitacion')"
              >
                Ir a la habitación
              </button>
            </div>
          </div>
          <div class="w-1/1 px-2">
            <div class="flex flex-col">
              ¿Estará en el living?
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/living')"
              >
                Buscar en el living
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
    title: 'Living',
  },
}
</script>
