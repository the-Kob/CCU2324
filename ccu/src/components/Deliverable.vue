<template>
  <div class="drawer">
    <h2>{{ deliverable.title }}</h2>
    <p>{{ deliverable.description }}</p>
    <div class="drawer-content">
      <div v-for="(content, contentIndex) in deliverable.content" :key="contentIndex">
        <template v-if="content.type === 'video'">
          <div class="video-container">
            <iframe width="560" height="315" :src="content.videoSrc" frameborder="0" allowfullscreen></iframe>
          </div>
        </template>
        <template v-if="content.type === 'image'">
          <img :src="content.src" :alt="content.alt" class="content-image" />
        </template>
      </div>

    </div>
    <div class="download-button">
      <a :href="deliverable.downloadLink" download class="download-link">Download</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deliverable',
  props: {
    deliverable: Object,
  },
};
</script>

<style scoped>
.drawer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.drawer-content {
  background-color: transparent;
  border: none;
}

.video-container {
  width: 560px;
  height: 315px;
}

.download-button {
  margin-top: 10px;
  text-align: center;
}

.download-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db; /* Use your desired background color */
  color: #fff; /* Set text color to contrast with the background */
  text-decoration: none;
  border-radius: 5px; /* Adjust the border-radius as needed */
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
}

.download-link:hover {
  background-color: #2980b9; /* Change the background color on hover */
}

</style>