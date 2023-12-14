<!-- Report.vue -->
<template>
<div class="report-container">
    <div class="report-box">
        <div class="title">{{ report.title }}</div>
        <div class="content" v-html="report.content"></div>
    </div>
</div>
</template>

<script>
export default {
    props: ['report'],
};
</script>

<style scoped>
.report-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.report-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  cursor: pointer;
  position: relative;
}

.title {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  transform-origin: center top;
}

.justified-text {
  text-align: justify;
}
</style>
  