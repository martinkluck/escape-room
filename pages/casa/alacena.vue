<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Alacena</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">
          Nos dirigimos a la alacena en búsqueda de la llave...
        </h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNS-PAZw577aN68kC77PzT9p2R91eJGKmM6Q&usqp=CAU"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        Nos ponemos a revisar la alacena entre los platos cubiertos hoyas y
        pizzeras pero no encontramos nada...
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa/cocina')"
        >
          Volver
        </button>
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
