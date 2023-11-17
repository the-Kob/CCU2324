<template>
    <div class="weekly-reports-container">
      <SideMenu :items="reports" :item-key="'report'" @item-click="toggleReport" />
      <main>
        <div class="divider"></div>
        <div v-for="(report, index) in reports" :key="index" :id="`report-${index + 1}`">
          <Report :report="report" 
          :fullPath="getReportPath(index + 1)" 
          :isCollapsed="isReportCollapsed(index + 1)" 
          @toggle-collapse="toggleReport(index + 1)" />
          <div class="divider" :style="getDividerStyle(index + 1)"></div>
        </div>
      </main>
    </div>
  </template>

<script>
import Report from '@/components/Report.vue';
import SideMenu from '@/components/SideMenu.vue';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero. Pellentesque sit amet porttitor eget. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. In cursus turpis massa tincidunt dui ut. Auctor neque vitae tempus quam pellentesque nec nam. Suscipit adipiscing bibendum est ultricies. Feugiat in ante metus dictum at. Viverra suspendisse potenti nullam ac. Scelerisque eleifend donec pretium vulputate sapien nec. Tellus integer feugiat scelerisque varius morbi enim. Nunc consequat interdum varius sit amet mattis vulputate. Purus non enim praesent elementum facilisis leo vel fringilla est. Eget gravida cum sociis natoque. Sed risus pretium quam vulputate dignissim suspendisse....";

export default {
    components: {
        Report,
        SideMenu,
    },
    data() {
        return {
            reports: [
                { 
                    title: 'Week 1', 
                    content: loremIpsum
                },
                { 
                    title: 'Week 2', 
                    content: loremIpsum
                },
                { 
                    title: 'Week 3', 
                    content: loremIpsum
                },
                { 
                    title: 'Week 4', 
                    content: loremIpsum
                },
            ],
            activeReports: [],
        };
    },
    methods: {
        getReportPath(index) {
            return `#report-${index}`;
        },
        toggleReport(reportId) {
            const index = this.activeReports.indexOf(reportId);

            if (index !== -1) {
                // Report is active, remove it
                this.activeReports.splice(index, 1);
            } else {
                // Report is not active, add it
                this.activeReports.push(reportId);
            }
        },
        isReportCollapsed(reportId) {
            return this.activeReports.indexOf(reportId) === -1;
        },
        getDividerStyle(reportId) {
            return {
                transition: this.isReportCollapsed(reportId) ? 'transform 0.3s ease-in-out 0.3s' : 'transform 0.3s ease-in-out',
            };
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
  margin-top: 20px;
}

.report-wrapper {
  margin-bottom: 20px;
}

.report-preview {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
}

.report-preview:hover {
  background-color: #f0f0f0;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  transform-origin: center top;
}
</style>
  