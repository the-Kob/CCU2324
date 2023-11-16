<template>
<aside class="side-menu">
    <ul>
    <li v-for="(report, index) in reports" :key="index">
        <router-link :to="getReportPath(index + 1)" class="menu-item" @click="handleReportClick(index + 1)">
          {{ report.title }}
        </router-link>
    </li>
    </ul>
</aside>
</template>

<script>
export default {
props: ['reports', 'activeReports'],
methods: {
    getReportPath(index) {
        return `#report-${index}`;
    },
    handleReportClick(reportId) {
        this.$emit('report-click', reportId);
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