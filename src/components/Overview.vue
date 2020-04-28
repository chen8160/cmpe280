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
  min-height: 120vh;
}
.chart {
  margin: auto;
  width: 1400px;
  height: 80%;
  /* min-width: 700px; */
}
.content {
  position: sticky;
  right: 0;
  bottom: 0%;
  width: 30%;
  height: 0;
  /* background-color: lightseagreen; */
}
.content > * {
  width: 100%;
}
.content > img {
  position: absolute;
    bottom: 100px;
    left: 200%;

  /* transform: translate(200%, -120%); */
    /* transform: translate(230%, 120%); */

}

.fade-in {
  /* opacity: 0; */
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.6s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
    transform: translate(100%, 100%);
  }
  100% {
    opacity: 1;
    bottom: 100px;
    left: 200%;
    transform: translate(0,0);
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
