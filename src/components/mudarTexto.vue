<template>
  <div>
    <div class="d-flex justify-content-center">
      <h1 class="text-center">{{ texto }}</h1>
      <button class="btn btn-primary mx-5" @click="mudarTexto">Alterar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    texto: {
      type: String,
      required: true,
    },
  },
  methods: {
    mudarTexto() {
      this.$emit("mudarTexto", "Novo texto");
    },
  },
};
</script>
