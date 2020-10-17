<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4 class="mb-4">Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNS-PAZw577aN68kC77PzT9p2R91eJGKmM6Q&usqp=CAU"
        alt=""
        class="my-5 h-15"
      />
      <div class="px-2 mt-6">
        <div class="flex justify-around">
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              Nos ponemos a revisar la alacena entre los platos cubiertos hoyas
              y pizzeras pero no encontramos nada.
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo/cocina')"
              >
                Volver
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
    title: 'Alacena',
  },
};
</script>
