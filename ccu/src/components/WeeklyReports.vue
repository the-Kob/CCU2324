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
                    content: [
                      "Throughout this week, our team had the chance to break the ice and get to know each other, especially considering that it was the first meeting for most of us. Roles were defined, and we worked on assigning tasks among the team members.",
                      "In our initial lab class, we focused on crafting our Hunt statement and honing in on the tasks and target audience for our chatbot. After some discussion, we settled on students and identified tasks related to budgeting and inflation, believing these topics would be particularly relevant for our chosen demographic.",
                      "Additionally, we mapped out a user research plan based on initial interviews, setting the stage for defining our personas in the upcoming stages of our project."
                    ]
                },
                { 
                    title: 'Week 2', 
                    content: [
                      "In this week, the team embarked on the process of addressing challenges depicted in the storyboards through a comprehensive brainstorming session.",
                      "Ideas generated during this brainstorming were then organized into a mind map, forming cohesive groups. Once specific ideas were selected, they were further developed and illustrated through new storyboards, envisioning user interactions with the system and proposing solutions to financial issues.",
                    ]
                },
                { 
                    title: 'Week 3', 
                    content: [
                      "Moving into this week, individual team members independently selected storyboards based on thematic groupings.",
                      "The team collectively envisioned the potential features of the application by sketching screens and integrating these diverse ideas.",
                      "This amalgamation of concepts served as the foundation for the creation of a Low-Fidelity prototype. Tasks that users might perform were envisioned to anticipate the ways in which the app could assist them.",
                      "Utilizing paper and post-it notes, a prototype was crafted to enable user interaction. Subsequent user evaluations were conducted using the Wizard of Oz and Think Aloud methods, providing valuable insights for improvement.",
                      "Once potential issues were identified, the team transitioned to Figma to develop the Mid-Fidelity prototype, incorporating refined design elements and enhanced functionality.",
                    ]
                }
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
  