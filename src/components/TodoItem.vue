<!-- eslint-disable vue/no-mutating-props -->
<template>
  <li>
    <span v-bind:class="{ done: item.completed }">
      <input
        type="checkbox"
        v-on:change="switchToggle"
      />
      <strong>{{ item.id }}</strong>
      {{ item.title }}
    </span>
    <button v-on:click="$emit('delete', item.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      require: true,
      type: Object,
    },
  },

  methods: {
    switchToggle() {
      // eslint-disable-next-line vue/no-mutating-props
      this.item.completed = !this.item.completed;
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
}

button {
  background-color: tomato;
  border-radius: 50%;
  color: white;
  width: 30px;
  height: 30px;
  border: none;
  font-weight: bold;
}

input {
  margin-right: 3rem;
}
.done {
  text-decoration: line-through;
}

strong {
  margin-right: 1rem;
}
</style>
