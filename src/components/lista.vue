<template>
  <div>
    <b-container class="">
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
      <b-card bg-variant="dark" text-variant="white" class="m-5">
        <div class="d-flex flex-wrap">
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
    };
  },
  methods: {
    async getLista() {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      this.lista = response.data.results;
    },

    async getPokemonList(url) {
      const response = await axios.get(url);
      this.pokemon = response.data.pokemon;
      this.$emit("getPokemonList", response.data.pokemon);
    },
  },
  mounted() {
    this.getLista();
  },
};
</script>
