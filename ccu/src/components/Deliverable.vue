<template>
  <div class="drawer">
    <div class="drawer-content">
      <img :src="imageSrc" :alt="altText" />
    </div>
    <div class="download-button">
      <a :href="downloadLink" download>Download</a>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Deliverable',
  props: {
    imageSrc: String,
    downloadLink: String,
    description: String,
  },
};
</script>

<style scoped>
/* Add your styles from styles.css here */
</style>
