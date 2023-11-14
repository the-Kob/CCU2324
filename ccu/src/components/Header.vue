<template>
<header>
    <div class="header-container">
    <h1 class="logo"><router-link to="/">CCU 23/24</router-link></h1>
    <nav>
        <ul>
        <li><router-link to="/deliverables">Deliverables</router-link></li>
        <li><router-link to="/weekly-reports">Weekly Reports</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
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
  