<template>
  <aside class="side-menu">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="getItemPath(index + 1)" class="menu-item" @click="handleItemClick(index + 1)">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemKey: {
      type: String,
      default: 'item',
    },
  },
  methods: {
    getItemPath(index) {
      return `#${this.itemKey}-${index}`;
    },
    handleItemClick(itemId) {
      this.$emit('item-click', itemId);
    },
  },
};
</script>

<style scoped>
.side-menu {
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
  border-right: 1px solid #ccc; /* Add a border for separation */
}

ul {
  list-style: none;
  padding: 0;
}

.menu-item {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.menu-item:hover {
  background-color: #ddd;
}

li {
  margin-bottom: 10px;
}
</style>
