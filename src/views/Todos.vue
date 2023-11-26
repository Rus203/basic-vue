<script>
import ListItems from "@/components/ListItems.vue";
import AddTodoItem from "@/components/AddTodoItem.vue";
import Loader from "@/components/Loader.vue"

export default {
  components: {
    ListItems,
    AddTodoItem,
    Loader,
  },
  data() {
    return {
      items: [],
      loading: true,
      filter: 'all'
    };
  },

  computed: {
    filteredTodos() {
      if (this.filter === 'not completed') {
        return this.items.filter(element => !element.completed)
      } else if (this.filter === 'completed') {
        return this.items.filter(element => element.completed)
      }

      return this.items;
    }
  },

  mounted() {
    const link = "https://jsonplaceholder.typicode.com/users/1/todos?_limit=10";
    setTimeout(async () => {
      const data = await fetch(link);
    this.items = await data.json();
    this.loading = false;
    }, 1500)
  },

  methods: {
    addItem(item) {
      item.id =
        this.items.length === 0 ? 1 : Math.max(...this.items.map((elem) => elem.id)) + 1;
      this.items.push(item);
    },

    removeItem(id) {
      this.items = this.items.filter((elem) => elem.id !== id);
    },
  },
};
</script>

<template>
  <router-link to="/">Home</router-link>
  <AddTodoItem v-on:add="addItem" />
  <select v-model="filter">
    <option value="all">All</option>
    <option value="not completed">Not completed</option>
    <option value="completed">Completed</option>
  </select>
  <hr />
  <Loader v-if="loading" />
  <ListItems v-else-if="filteredTodos.length > 0" v-on:delete="removeItem" v-bind:items="filteredTodos" />
  <p v-else>No todo items here yet!</p>
</template>

<style scope>
hr {
  margin: 1rem auto 3em auto;
}
</style>
