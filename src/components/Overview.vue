<template>
  <div class="container">
    <div class="chart">
      <Tableau
        url="https://public.tableau.com/views/280_test/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link"
        width="1382px"
        height="2259px"
        :options="options"
      ></Tableau>
    </div>
    <div class="content">
      <img src="../assets/pikachu_anime.png" class="fade-in"/>
    </div>
  </div>
</template>
<script>
import 'vue-tableau';

export default {
  name: 'Overview',
  props: {
    loaded: {
      type: Boolean,
      default: false,
    },
    options: {
      hideToolbar: true,
      hideTabs: true
    }
  },
};
</script>
<style scoped>
.container {
  /* background-color: hotpink; */
  /* min-height: 90vh; */
  width: 100%;
  position: relative;
  background: url("../assets/bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 5vh 0;
}
.chart {
  margin: auto;
  width: 1400px;
  height: 80%;
  /* min-width: 700px; */
}
.content {
  position: fixed;
  right: 0;
  bottom: -5%;
  width: 30%;
  height: 50%;
  /* background-color: lightseagreen; */
}
.content > * {
  width: 100%;
}
.content > img {
  transform: translate(-10%, -30%);
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.6s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
    transform: translate(30%, 0);
  }
  100% {
    opacity: 1;
    transform: translateX(-10%, -30%);
  }
}

@media screen and (max-width: 800px) {
  .chart {
    width: 80%;
  }
  .content {
    display: none;
  }
}
</style>
