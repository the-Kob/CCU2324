<template>
<header>
    <div class="header-container">
    <h1 class="logo"><router-link to="/CCU2324/">CCU 23/24</router-link></h1>
    <nav>
        <ul>
        <li><router-link to="/CCU2324/deliverables">Deliverables</router-link></li>
        <li><router-link to="/CCU2324/weekly-reports">Reports</router-link></li>
        </ul>
    </nav>
    </div>
</header>
</template>
  
<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
header {
    position: relative;
    z-index: 10;
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    color: #fff;
    text-decoration: none;
}

nav ul {
list-style: none;
padding: 0;
margin: 0;
display: flex;
}

nav li {
    margin-right: 15px;
}

nav a {
    color: #fff;
    text-decoration: none;
}

nav a:visited {
    color: #fff;
}

nav a:hover {
    border-bottom: 2px solid #fff;
}

</style>
  