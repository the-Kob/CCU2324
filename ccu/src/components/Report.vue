<!-- Report.vue -->
<template>
<div class="report-container">
    <div class="report-box" :class="{ 'collapsed': isCollapsed }" @click="toggleCollapse">
        
        <div class="title">{{ report.title }}</div>
        <div class="content" :style="getContentStyle">
            <p>{{ report.content }}</p>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    props: ['report', 'isCollapsed'],
    methods: {
        toggleCollapse() {
            this.$emit('toggle-collapse');
        },
    },
    computed: {
        getContentStyle() {
            return {
                maxHeight: this.isCollapsed ? '0' : '300px',
                opacity: this.isCollapsed ? '0' : '1',
                overflow: this.isCollapsed ? 'hidden' : 'visible',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
            };
        },
    },
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
</style>
  