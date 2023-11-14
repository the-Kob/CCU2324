<template>
    <div class="drawer">
      <div class="drawer-content">
        <img :src="imageSrc" :alt="`Deliverable ${index + 1}`" @click="openPage(pageLink)">
      </div>
      <div class="download-button">
        <a :href="downloadLink" download>Download</a>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: 'Deliverable',
        props: {
        imageSrc: String,
        pageLink: String,
        downloadLink: String,
        },
        methods: {
        openPage(link) {
            // Implement your openPage logic if needed
            // You may want to use Vue Router for navigation
        },
        },
    };
  </script>
  
  <style scoped>
  /* Add your styles from styles.css here */
  </style>
  