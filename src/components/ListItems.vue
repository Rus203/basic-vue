<template>
  <div>
    <ul>
      <TodoItem
        v-for="item of items"
        :key="item.id"
        :item="item"
        @delete="deleteItem"
      />
    </ul>
  </div>
</template>

<style scope>
ul {
  list-style: none;
  padding: 0;
}
</style>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  props: ["items"],
  components: {
    TodoItem,
  },
  methods: {
    deleteItem(id) {
      this.$emit("delete", id);
    },
    addItem(item) {
      this.$emit(item);
    }
  },
};
</script>
