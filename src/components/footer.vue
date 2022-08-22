<template>
  <div>
    <div class="footer">
      <div class="itens">
        <span>Aula de VueJS © {{ new Date().getFullYear() }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  display: grid;
  background-color: #212529;
  color: #fff;
  height: 3rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  place-items: center;
}
</style>
