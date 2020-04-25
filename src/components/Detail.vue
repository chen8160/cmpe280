<template>
  <div class="container">
    <div class="content">
      <img src="../assets/pikachu_anime.png" class="fade-in" v-if="this.loaded"/>
    </div>
    <div class="chart"></div>
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
  },
};
</script>
<style scoped>
  .container{
    background-color:lawngreen;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .chart {
    width: 50%;
    height: 50%;
    background-color: lightseagreen;
  }
  .content {
    width: 30%;
    height: 50%;
    background-color: lightseagreen;
  }
  .content > * {
  width: 100%;
  }

  .fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: .6s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
