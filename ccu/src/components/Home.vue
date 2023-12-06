<template>
  <div class="home-container">
    <div class="purpose-section">
      <h2>Welcome!</h2>
      <p>
        This is our website for the CCU course taught @ Instituto Superior Técnico by professors
        <strong><a href="https://nunojnunes.notion.site/Nuno-Jardim-Nunes-a5a4a2fe6d944d03ac757d3261e64863" target="_blank">Nuno Jardim Nunes</a></strong> and
        <strong><a href="https://web.tecnico.ulisboa.pt/filipa.rocha/" target="_blank">Filipa Rocha</a></strong>.
      </p>
      <h3>Who are we?</h3>
      <p>We are the <strong>Budget Brigade</strong>, a group of 5 students, and these are our roles within our team:</p>
    </div>
    <div class="image-section">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <div class="image-wrapper">
          <img :src="require(`@/assets/${image.src}`)" :alt="image.alt" />
        </div>
        <div class="image-caption">
          <h3>{{ image.title }}</h3>
          <p>{{ image.subtitle }}</p>
        </div>
      </div>
    </div>

    <div class="hunt-statement-section">
      <p><strong>Hunt Statement:</strong>
        We will be conducting research on what strategies students employ to navigate the challenges posed by rising prices, so that we can have a better insight into how inflation affects their budget management.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "josselin-le-tarnec.png",
          alt: "Image 1",
          title: "Josselin Le Tarnec",
          subtitle: "Project Manager",
        },
        {
          src: "joao-pestana.png",
          alt: "Image 1",
          title: "João Pestana",
          subtitle: "User Research Lead",
        },
        {
          src: "gustavo-rocha.png",
          alt: "Image 1",
          title: "Gustavo Rocha",
          subtitle: "Design Lead",
        },
        {
          src: "bruno-mateus.png",
          alt: "Image 1",
          title: "Bruno Mateus",
          subtitle: "Front-end Developer",
        },
        {
          src: "guilherme-pereira.jpg",
          alt: "Image 1",
          title: "Guilherme Pereira",
          subtitle: "Back-end Developer",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h2, h3 {
  margin-bottom: 10px;
}

.image-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.image-item {
  width: 48%;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  max-height: 200px;
  height: auto;
}

.image-caption {
  text-align: center;
}

p {
  margin: 0;
  line-height: 1.5;
}

.hunt-statement-section {
  margin-top: 20px;
}
</style>

