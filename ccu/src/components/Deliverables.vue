<template>
  <div class="weekly-reports-container">
    <SideMenu :items="deliverables" :item-key="'deliverable'" @item-click="navigateToDeliverable" />
    <main>
      <div v-for="(deliverable, index) in deliverables" :key="index" :id="`deliverable-${index + 1}`">
        <Deliverable
          :deliverable="deliverable"
          :fullPath="getDeliverablePath(index + 1)"
          :imageSrc="deliverable.imageSrc"
          :downloadLink="deliverable.downloadLink"
          :description="deliverable.description"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Deliverable from '@/components/Deliverable.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
  components: {
    Deliverable,
    SideMenu,
  },
  data() {
    return {
      deliverables: [
        {
          downloadLink: 'https://drive.google.com/uc?export=download&id=1hZIalFCUhMPqXQyKFooWStqXVVa2JYwj',
          title: 'Assignment 1',
          content: [
            {
              type: 'video',
              videoSrc: 'https://www.youtube.com/embed/twujtwxRvx4',
            },
          ],
          description: [
            'Please download the presentation slides below.',
          ]
        },
        {
          downloadLink: 'https://drive.google.com/uc?export=download&id=1CvFMlvJjA_7Bamc92GB_ppRpJclGaCeI',
          title: 'Assignment 2',
          content: [
            {
              type: 'video',
              videoSrc: 'https://www.youtube.com/embed/xHXTcI-c428',
            },
          ],
          description: [
            'Please download the presentation slides below.',
          ]
        },
        {
          downloadLink: 'https://drive.google.com/uc?export=download&id=1bfZ8V6xKF_Q4gA32cO9KcZPDrQK18AaL',
          title: 'Assignmen 3',
          content: [
            {
              type: 'video',
              videoSrc: 'https://www.youtube.com/embed/FW3VEPu2-zM',
            },
          ],
          description: [
            'Please download the presentation slides below.',
          ]
        },
        {
          downloadLink: 'https://drive.google.com/uc?export=download&id=1mOp54towar_KcEW190xrYOlnfV1TK12R',
          title: 'Final Report',
          content: [],
          description: [
            'Please download the final report below.',
          ]
        },
      ],
    };
  },
  methods: {
    getDeliverablePath(index) {
      return `#deliverable-${index}`;
    },
  },
  mounted() {
        this.$router.afterEach((to, from) => {
            if (to.hash) {
            const element = document.getElementById(to.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            }
        });
    },
};
</script>

<style scoped>
.weekly-reports-container {
  display: flex;
}

main {
  margin-left: 300px;
  flex: 1; /* Use flex to take up remaining space */
}

.report-wrapper {
  margin-bottom: 20px;
}

/* Add styles for the report-divider */
.report-divider {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 10px; /* Adjust as needed */
}
</style>
