<template>
  <div class="container">
    <!-- <div class="content" ref="con">
      <img src="../assets/charizard_anime.png" @click="debug" ref="img" class="fade-in"/>
    </div> -->
    <div class="chart">
      <Tableau
        url="https://public.tableau.com/views/project_280_3/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link"
        width="1200px"
        height="1027px"
        :options="options"
      ></Tableau>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Detail',
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
  mounted() {
  },
  methods:{
    debug() {
      debugger;
    }
  }
};
</script>
<style scoped>
  .container{
    /* background-color:lawngreen; */
      background: url("../assets/bg.jpg");
  background-size: cover;
  background-position: center;
    width: 100%;
    /* height: 100vh; */
    position: relative;
    display: flex;
    flex-flow: column;
    padding: 5vh 0;
  }
  .chart {
  margin: auto;
  /* min-width: 700px; */
    background-color: lightseagreen;
  }
  .content {
    position: fixed;
    top: 60%;
    width: 30%;
    height: 0px;
    background-color: lightseagreen;
    align-self:flex-start;
  }

  .content > * {
  width: 60%;
  }

  .content > img {
  position: absolute;
    top: 0;
    left: 0%;

  /* transform: translate(200%, -120%); */
  /* transform: translate(230%, 120%); */

}

  .fade-in {
  /* opacity: 1; */
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
    transform: translate(-100%, -100%);
  }
  100% {
    opacity: 1;
    /* bottom: 100px; */
    /* left: 200%; */
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
