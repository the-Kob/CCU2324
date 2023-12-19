<template>
    <div class="weekly-reports-container">
      <SideMenu :items="reports" :item-key="'report'" />
      <main>
        <div class="divider"></div>
        <div v-for="(report, index) in reports" :key="index" :id="`report-${index + 1}`">
          <Report :report="report" :fullPath="getReportPath(index + 1)" />
          <div class="divider"></div>
        </div>
      </main>
    </div>
  </template>

<script>
import Report from '@/components/Report.vue';
import SideMenu from '@/components/SideMenu.vue';

import Image1 from '@/assets/Imagem1.png';
import Image2 from '@/assets/Imagem2.png';
import Image3 from '@/assets/Imagem3.png';
import Image4 from '@/assets/Imagem4.png';
import Image5 from '@/assets/Imagem5.png';
import Image6 from '@/assets/Imagem6.png';
import Image7 from '@/assets/Imagem7.png';
import Image8 from '@/assets/Imagem8.png';
import Image9 from '@/assets/Imagem9.png';
import Image10 from '@/assets/Imagem10.png';
import Image11 from '@/assets/Imagem11.jpg';
import Image12 from '@/assets/Imagem12.jpg';
import Image13 from '@/assets/Imagem13.jpg';
import Image14 from '@/assets/Imagem14.png';
import Image15 from '@/assets/Imagem15.jpg';
import Image16 from '@/assets/Imagem16.jpg';
import Image17 from '@/assets/Imagem17.jpg';
import Image18 from '@/assets/Imagem18.png';

export default {
    components: {
        Report,
        SideMenu,
    },
    data() {
        return {
            reports: [
                { 
                    title: 'Assigment 1', 
                    content: [`
                      <div>
                        <p>For this assignment, the <strong>Hunt statement</strong> was conceived, defining our goals for our research plan.</p>
                        <img src="${Image1}" alt='The Hunt Statement Diagram'>

                        <p>To achieve this, an interview plan was designed with 4 steps:</p>
                        <ol>
                            <li>Check if the interviewee consents to the interview</li>
                            <li>Ask for demographic information and some financial information</li>
                            <li>Questionnaire about budgeting</li>
                            <li>Questionnaire about inflation</li>
                        </ol>

                        <p>With it, 5 different students were asked to be interviewed, resulting in these 5 user characterizations:</p>
                        <img src="${Image2}" alt='User Characterizations'>

                        <p>For each, notes were taken for the remainder of the interviews allowing the creation of 3 different personas:</p>
                        <img src="${Image3}" alt='Persona 1'>
                        <img src="${Image4}" alt='Persona 2'>
                        <img src="${Image5}" alt='Persona 3'>

                        <p>With these personas, storyboards were able to be created that reflect some of the problems our personas can face related to inflation and their budget.</p>
                        <img src="${Image6}" alt='Storyboard 1'>
                        <img src="${Image7}" alt='Storyboard 2'>
                        <img src="${Image8}" alt='Storyboard 3'>

                        <p>To better understand these problems that our personas can face, models were constructed.</p>
                        <p>The <strong>flow model</strong> helps visualize the workflow and highlights the breakdowns that create problems.</p>
                        <img src="${Image9}" alt='Flow Model'>

                        <p>The <strong>cultural model</strong> assists in understanding the expectations between each intervenient around the personas.</p>
                        <img src="${Image10}" alt='Cultural Model'>
                    </div>
                    `
                    ]
                },
                { 
                    title: 'Assigment 2', 
                    content: [`
                    <div>
                        <p>Using the data gathered from the research plan, the team began the ideation phase focusing on each of our persona's scenarios and the storyboards we previously made, through a comprehensive brainstorming session.</p>
                        <img src="${Image11}"" alt="Brainstorming Session">

                        <p>Later these ideas were organized into a mind-map, forming cohesive groups.</p>
                        <img src="${Image12}" alt="Mind-map">

                        <p>We then selected the ideas that would suit our user's needs better. Each group member selected storyboards based on thematic groupings and began to further develop them into more detailed storyboards. We then used these storyboards as a foundation for our Low-Fidelity prototype.</p>
                        <img src="${Image13}" alt="Storyboard Development 1">
                        <img src="${Image14}" alt="Storyboard Development 2">
                        <img src="${Image15}" alt="Storyboard Development 3">
                        <img src="${Image16}" alt="Low-Fidelity Prototype">

                        <p>Utilizing paper and post-it notes, a prototype was crafted to enable user interaction. Subsequent user evaluations were conducted using the Wizard of Oz and Think Aloud methods, providing valuable insights for improvement.</p>
                        <img src="${Image17}" alt="Prototype and User Evaluation">

                        <p>For the testing, we used the Wizard of Oz and Think Aloud testing methods, giving our users tasks that we envisioned they might perform:</p>
                        <ul>
                            <li>Imagine that you would like to check your balance, how would you do that?</li>
                            <li>How would you check your planned expenses? And additionally imagine you want to register a new expense, for instance your rent that is due to the 21st of November and has a value of 500€.</li>
                            <li>Now, please try to ask for information about inflation.</li>
                            <li>How would you check if you should go out this weekend or not?</li>
                            <li>Imagine that you are at a store and that you found some headphones you really like and want to buy! What would you do to get more information about them?</li>
                        </ul>

                        <p>During the testing (roughly 10 minutes for each), our users found issues with the prototype which then the team thought about all the different solutions that we could use to face them and make our application better for the users.</p>

                        <p>Once we did this, the team began the development of the mid fi prototype, refining the design and adding extra functionality to the chatbot.</p>
                        <img src="${Image18}" alt="Mid-Fidelity Prototype">
                        <p><a href="https://www.figma.com/proto/ujlrkSAkTmA6UTpRRFSJy1/Mid---Fi?type=design&node-id=1-2&t=9OPEFxxiu5ytgFyg-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target="_blank">View Prototype in Figma</a></p>

                        <p>We repeated the same process for the mid fi prototype so we could get some more feedback before moving on to the high fi prototype.</p>
                        <ul>
                            <li>Test #1: User had no difficulty performing the tasks. Pointed out that some of the issues were solved adequately.</li>
                            <li>Test #2: Similar to user #1</li>
                            <li>Test #3: User said to not put input and QR code on the pin page and to fix the microphone button (which was not implemented at the time)</li>
                            <li>Test #4: User said that the login icon after inputting the supposed passcode wasn't clear enough.</li>
                        </ul>
                    </div>
                    `
                    ]
                },
                { 
                    title: 'Assigment 3', 
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
  margin-left: 200px;
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
  