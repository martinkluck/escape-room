<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Estamos en la cocina</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">
          En algún lugar de la cocina deberíamos encontrar algo...
        </h4>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <img
          src="https://image.freepik.com/foto-gratis/antigua-cocina-oscura-casa-abandonada_32342-764.jpg"
          alt=""
          class="my-5 max-w-xl"
        />
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa/alacena')"
        >
          Revisar alacena
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa/cajones')"
        >
          Revisar cajones
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa')"
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
    title: 'Cocina',
  },
};
</script>
