<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" required type="text" />
    <button>Create</button>
  </form>
</template>

<style scoped>
input {
  width: 40%;
}

button {
  background-color: burlywood;
  padding: 5px 10px;
  border: none;
}

form {
  display: flex;
  justify-content: space-between;
  margin: auto 10px;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim) {
        this.$emit("add", { title: this.title });
        this.title = ''
      }
    },
  },
};
</script>
