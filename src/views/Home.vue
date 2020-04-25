<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Overview></Overview>
      </div>
      <div class="section">
        <Detail></Detail>
      </div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';

export default {
  name: 'Home',
  components: {
    Overview,
    Detail,
  },
  data() {
    return {
      options: {
        licenseKey: 'Mykey',
        navigation: true,
      },
    };
  },
};
</script>
