<template>
  <div>
    <b-container>
      <b-card bg-variant="dark" text-variant="white" class="m-5">
        <b-button
          v-for="pokemon in lista"
          :value="pokemon.url"
          :key="pokemon.name"
          variant="outline-primary"
          class="m-2"
          @click="getPokemonList(pokemon.url)"
          >{{ pokemon.name }}</b-button
        >
      </b-card>
      <b-overlay
        :show="showLoading"
        v-if="showLoading"
        rounded="sm"
        variant="transparent"
        class="p-2"
      >
      </b-overlay>
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="m-5"
        v-if="pokemon?.length > 0"
      >
        <div class="d-flex flex-wrap listaPokemon">
          <b-card
            text-variant="black"
            class="p-2 flex-fill m-3"
            v-for="pokemon in pokemon"
            :key="pokemon.pokemon.name"
          >
            <b-img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url
                .split('/')
                .slice(-2)
                .slice(0, -1)}.png`"
              rounded="circle"
              fluid
              alt="Imagem Indisponivel"
            />
            {{ pokemon.pokemon.name }}
          </b-card>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lista",
  data() {
    return {
      lista: [],
      pokemon: [],
      showLoading: false,
    };
  },
  methods: {
    async getLista() {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      this.lista = response.data.results;
    },

    async getPokemonList(url) {
      this.showLoading = true;
      const response = await axios.get(url);
      this.pokemon = response.data.pokemon;
      this.showLoading = false;
    },
  },
  mounted() {
    this.getLista();
  },
};
</script>

<style scoped></style>
