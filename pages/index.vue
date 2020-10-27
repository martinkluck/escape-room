<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="title">Escape Room</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h3 class="subtitle">Campamento de Verano Jóvenes Metro</h3>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://imganuncios.mitula.net/medium/casa_nueva_en_alquiler_primera_seccion_delta_1_ba%C3%B1o_5950066594042062417.jpg"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div
          class="flex justify-center items-center px-4 py-2 cursor-pointer"
          @click="hide = !hide"
        >
          <span v-if="!hide">Ver prologo</span>
          <span v-if="hide">Ocultar prologo</span>
        </div>
      </div>
      <div v-if="hide" class="text-center px-4 py-2 m-2">
        <transition name="fade">
          <p>
            Se hace enero 2021, la cuarentena termina y decidimos hacer todxs
            juntxs una escapada, un finde a una isla en el delta del tigre. La
            idea es quedarnos una noche, del sábado al domingo y así lo hicimos.
            Tomamos la lancha colectivo el sábado por la mañana, cargamos la
            carne para el asado, bolsas de dormir, unas cervecitas… Después de
            una hora y media en lancha, llegamos! Nos acomodamos enseguida, la
            casa no es la gran cosa pero nos sirve… lo que si tiene una tremenda
            parrilla, por lo que nos ponemos a hacer un asado para almorzar.
            Cuando terminamos de comer, Clari trae unos juegos de mesa y nos
            ponemos a jugar afuera, pero al rato se empieza a nublar y nos
            metemos adentro. Después de unas horas de tomar mate y jugar nos
            predisponemos a empezar a amasar las pizzas para la noche, queríamos
            hacerlas a la parrilla pero se larga a lloviznar y entonces
            decidimos hacerlas al horno. Mientras que hacemos la masa, empieza a
            oscurecer. Si bien al principio estaba lloviznando y eso le daba
            cierta mística, luego comienza a llover más y más fuerte… pero para
            cuando terminamos de hacer las pizzas y nos pusimos a comer, empieza
            a llover muy fuerte, lo cual comienza a asustarnos...
          </p>
        </transition>
      </div>
      <div class="text-justify px-4 py-2 m-2">
        <transition name="fade">
          <p class="text-center">
            y ahora que hacemos? Tenemos que volver a tierra firme...
          </p>
        </transition>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5"
          @click="$router.push('/casa')"
        >
          Entrar a la casa
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      hide: false,
    };
  },
  computed: {
    ...mapGetters(['getSeenShed', 'getPartOneKeyFound', 'getPartTwoKeyFound']),
    havePassword() {
      return this.getPartOneKeyFound && this.getPartTwoKeyFound;
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
