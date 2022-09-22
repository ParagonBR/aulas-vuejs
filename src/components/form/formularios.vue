<template>
  <div>
    <h1 class="text-center">Formulario {{ titulo }}</h1>
    <div class="row m-5">
      <div>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="formulario"
              value="formUm"
              v-model="tipoForm"
              checked
            />
            Formulario 1
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="formulario"
              value="formDois"
              v-model="tipoForm"
            />
            Formulario 2
          </label>
        </div>
        <component :is="tipoForm"></component>
      </div>
    </div>
  </div>
</template>

<script>
import formUm from "./form.vue";
import formDois from "./form-copy.vue";

export default {
  name: "formularios",
  components: {
    formUm,
    formDois,
  },
  data() {
    return {
      titulo: "Massa",
      tipoForm: "",
    };
  },
  methods: {
    changeForm(tipo) {
      this.tipoForm = tipo;
    },
  },
};
</script>
