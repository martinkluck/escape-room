<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="subtitle">Frente al armario del cobertizo</h1>
      <h4 class="mb-4">Este armario tiene llave...</h4>
      <img
        v-if="open"
        src="https://thumbs.dreamstime.com/t/armario-abandonado-viejo-de-la-puerta-para-el-candado-%C3%A9ste-es-los-footae-del-154116187.jpg"
        alt=""
        class="my-5 max-h-5"
      />
      <img
        v-if="!open"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx478suJlFXfB-OKOygXUXRnYt1VUrFevLRQ&usqp=CAU"
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
                @click="$router.push('/casa')"
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
