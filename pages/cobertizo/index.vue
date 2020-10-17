<template>
  <div class="container">
    <div class="justify-center">
      <h1 class="subtitle">Búsqueda de llave del cobertizo</h1>
      <h4>Deberíamos buscar donde podría estar la llave</h4>
      <img
        src="https://p0.pikist.com/photos/743/453/latch-door-latch-fastening-fasten-secure-close-hold-wood-wooden-door.jpg"
        alt=""
        class="my-5"
      />
      <div class="px-5">
        <div class="flex -mx-2 flex-wrap">
          <div class="w-1/1 px-2">
            <div class="flex flex-col">
              Ingresar contraseña
              <input v-model="password" type="password" class="text-black" />
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="checkPassword"
              >
                Revisar contraseña
              </button>
            </div>
          </div>
          <div class="w-1/1 px-2">
            <div class="flex flex-col">
              <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                @click="$router.push('/busqueda-llave-cobertizo')"
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
      password: '',
      valid: 'asucena',
    };
  },
  methods: {
    checkPassword() {
      if (this.password === this.valid) {
        this.$router.push('/cobertizo/dentro');
      }
    },
  },
  head: {
    title: 'Puerta cobertizo',
  },
};
</script>
