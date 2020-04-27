<template>
  <div class="container">
    <div class="chart">
      <Tableau
        url="https://public.tableau.com/views/280_test/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link"
        width="100%"
      ></Tableau>
    </div>
    <div class="content">
      <img src="../assets/pikachu_anime.png" class="fade-in" v-if="this.loaded" />
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
  },
};
</script>
<style scoped>
.container {
  /* background-color: hotpink; */
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../assets/bg.jpg");
  background-size: cover;
  background-position: center;
}
.chart {
  margin: auto;
  padding-top: 2%;
  width: 1400px;
  height: 80%;
  /* min-width: 700px; */
}
.content {
  position: absolute;
  right: 0;
  bottom: -10%;
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
