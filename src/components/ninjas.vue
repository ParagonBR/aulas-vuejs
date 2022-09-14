<template>
  <div>
    <b-list-group class="d-flex m-5 justify-content-center align-items-center">
      <b-list-group-item
        class="text-center"
        button
        variant="info"
        style="width: 50%"
        v-for="(ninja, index) in ninjas"
        :key="ninja.name"
        @click="editNinja(index)"
        >Name: {{ ninja.name }}
        <p class="border-primary p-1">Belt: {{ ninja.belt }}</p>
      </b-list-group-item>
    </b-list-group>
    <modal
      @ninjaEditado="ninjaEditado"
      @closeModal="toggleModal"
      v-if="toggle == true"
      :toggle="toggle"
      :ninja="SelectedNinja"
    ></modal>
  </div>
</template>
<script>
import Modal from "./modal.vue";
export default {
  components: {
    Modal,
  },
  name: "lista",
  data() {
    return {
      toggle: false,
      ninja: { name: null, age: null, belt: null },
      SelectedNinja: null,
    };
  },
  methods: {
    editNinja(index) {
      this.toggle = true;
      this.SelectedNinja = this.ninjas[index];
      this.SelectedNinja.index = index;
    },
    toggleModal(newVal) {
      console.log("toggle", newVal);
      this.toggle = false;
    },
    ninjaEditado(ninja) {
      console.log("ninjaEditado", ninja);
      let index = ninja.index;
      delete ninja.index;
      this.ninjas[index] = ninja;
    },
  },
  props: {
    ninjas: {
      required: true,
    },
  },
};
</script>
