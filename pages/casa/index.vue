<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Estamos dentro de la casa</h1>
      </div>
      <div class="text-center px-4 py-2 m-2 max-w-xl">
        <h4 v-if="getSeenShed" class="text-center">
          El agua sigue subiendo mejor los apresuramos a buscar la llave del
          cobertizo...
        </h4>
        <h4 v-else class="text-center">
          Nos damos cuenta que el agua empieza a subir y con esta tormenta la
          lancha colectivo no va a pasar y para colmo estamos sin señal, alguien
          recuerda que nos dijeron que en el cobertizo hay una lancha...
        </h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://pbs.twimg.com/media/EFZ3UeuW4AAK4dh.jpg"
            alt=""
            class="my-5 max-w-xl"
          />
        </div>
      </div>
      <div v-if="getSeenShed" class="text-center px-4 py-2 m-2">
        ¿Estará en la habitación?
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa/habitacion')"
        >
          Ir a la habitación...
        </button>
      </div>
      <div v-if="getSeenShed" class="text-center px-4 py-2 m-2">
        ¿Estará en la cocina?
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa/cocina')"
        >
          Ir a la cocina...
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/cobertizo')"
        >
          Ir al cobertizo...
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getSeenShed', 'getPartOneKeyFound', 'getPartTwoKeyFound']),
    havePassword() {
      return this.getPartOneKeyFound && this.getPartTwoKeyFound;
    },
  },
  head: {
    title: 'Casa',
  },
};
</script>
