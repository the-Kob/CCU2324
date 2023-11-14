<template>
<div>
    <main>
    <h2>Deliverables</h2>
    <div id="deliverables-container">
        <router-link
          v-for="(deliverable, index) in deliverables"
          :key="index"
          :to="{ name: 'deliverable', params: { id: index + 1, title: deliverable.title, content: deliverable.content } }"
        >
          <div class="drawer">
            <div class="drawer-content">
              <img :src="deliverable.imageSrc" :alt="deliverable.altText">
            </div>
            <div class="download-button">
              <a :href="deliverable.downloadLink" download>Download</a>
            </div>
            <p>{{ deliverable.description }}</p>
          </div>
        </router-link>
    </div>

    </main>
</div>
</template>

<script>
import Deliverable from '@/components/Deliverable.vue'

export default {
    name: 'Deliverables',
    components: {
    Deliverable,
    },
    data() {
    return {
        deliverables: [
            {
                imageSrc: '@/assets/deliverable-1.png',
                downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
            },
        ],
    };
    },
};
</script>

<style scoped>
#deliverables-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
  