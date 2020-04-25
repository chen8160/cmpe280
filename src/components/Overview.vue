<template>
  <div class="container">
    <div class="chart"></div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: 'Overview',
};
</script>
<style scoped>
  .container{
    background-color: hotpink;
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
    /* min-width: 700px; */
  }
  .content {
    width: 30%;
    height: 50%;
    background-color: lightseagreen;
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
