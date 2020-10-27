<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Frente al armario del cobertizo</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">Este armario tiene llave...</h4>
      </div>
      <div v-if="open" class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://thumbs.dreamstime.com/t/armario-abandonado-viejo-de-la-puerta-para-el-candado-%C3%A9ste-es-los-footae-del-154116187.jpg"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div v-if="!open" class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx478suJlFXfB-OKOygXUXRnYt1VUrFevLRQ&usqp=CAU"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div v-if="!open" class="text-center px-4 py-2 m-2">
        Ingresar contraseña
        <input v-model="password" type="password" class="text-black" />
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="checkPassword"
        >
          Abrir armario
        </button>
      </div>
      <div v-if="open" class="text-center px-4 py-2 m-2">
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
        >
          Encontramos el combustible, llenemos el tanque y salgamos de esta
          isla...
        </div>
      </div>
      <div v-if="open" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/cobertizo/final')"
        >
          Salir de la isla
        </button>
      </div>
      <div v-if="!open" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/cobertizo/dentro')"
        >
          Volver
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      password: '',
      valid: '1978',
    };
  },
  methods: {
    checkPassword() {
      if (this.password === this.valid) {
        this.open = !this.open;
      }
    },
  },
  head: {
    title: 'Armario',
  },
};
</script>
