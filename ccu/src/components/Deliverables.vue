<template>
  <div class="weekly-reports-container">
    <SideMenu :reports="deliverables" @report-click="navigateToDeliverable" />
    <main>
      <h2>Deliverables</h2>
      <div v-for="(deliverable, index) in deliverables" :key="index" class="report-wrapper">
        <Deliverable
          :imageSrc="deliverable.imageSrc"
          :downloadLink="deliverable.downloadLink"
          :description="deliverable.description"
        />
        <!-- Add a divider at the end of each deliverable -->
        <div v-if="isLastDeliverable(index)" class="report-divider"></div>
      </div>
    </main>
  </div>
</template>

<script>
import Deliverable from '@/components/Deliverable.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
  name: 'Deliverables',
  components: {
    Deliverable,
    SideMenu,
  },
  data() {
    return {
      deliverables: [
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        {
          imageSrc: '@/assets/deliverable-1.png',
          downloadLink: 'https://drive.google.com/uc?export=download&id=18S066VhIl_Nupqqy1iQlp4o-XNkX5qeh',
          title: 'Deliverable 1',
          content: 'Content for Deliverable 1.',
          description: 'Description for Deliverable 1.',
        },
        // Add more deliverables as needed
      ],
    };
  },
  methods: {
    isLastDeliverable(index) {
      return index === this.deliverables.length - 1;
    },
    navigateToDeliverable(deliverable) {
      // Implement your logic for navigating to a specific deliverable
      // You can use Vue Router for navigation or any other method you prefer
      console.log('Navigating to deliverable:', deliverable);
    },
  },
};
</script>

<style scoped>
.weekly-reports-container {
  display: flex;
}

main {
  margin-left: 20px;
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
