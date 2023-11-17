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
