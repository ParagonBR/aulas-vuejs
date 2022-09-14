<template>
  <div>
    <b-modal
      :hide-footer="true"
      v-if="ninja"
      :no-close-on-backdrop="true"
      @ok="confirmar"
      id="modal-center"
      @close="fecharModal"
      v-model="modalTogle"
      centered
      title="BootstrapVue"
    >
      <label for="Nome">Nome</label>
      <b-form-input
        v-if="ninja"
        name="Nome"
        v-model="ninja.name"
        placeholder="Nome do Ninja"
      ></b-form-input>
      <label for="idade">Idade</label>
      <b-form-input
        name="idade"
        v-model="ninja.age"
        placeholder="Idade do Ninja"
      ></b-form-input>
      <label for="Faixa">Faixa</label>
      <b-form-input
        name="Faixa"
        v-model="ninja.belt"
        placeholder="Faixa do Ninja"
      ></b-form-input>
      <b-button class="mt-2" variant="outline-warning" block @click="confirmar"
        >Editar</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return { modalTogle: true };
  },
  methods: {
    confirmar(e) {
      this.$emit("ninjaEditado", this.ninja);
      this.fecharModal();
    },
    fecharModal() {
      console.log("fechou");
      this.$emit("closeModal", false);
    },
  },
  props: {
    toggle: {},
    ninja: {
      type: Object,
    },
  },
};
</script>
