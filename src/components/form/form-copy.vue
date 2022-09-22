<template>
  <div>
    <form @submit="Enviar" id="formFuncionario">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">Nome</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Nome"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">Sobrenome</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Sobrenome"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">CPF</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="CPF"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">RG</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="RG"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">Data de Nascimento</label>
            <input
              type="date"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Data de Nascimento"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">Telefone</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Telefone"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">Celular</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Celular"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              type="email"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary my-2">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "formulario-copy",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    Enviar(e) {
      e.preventDefault();

      alert("enviado");
    },
  },
};
</script>
