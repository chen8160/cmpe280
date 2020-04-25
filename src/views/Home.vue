<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Overview :loaded="this.loaded.overview"></Overview>
      </div>
      <div class="section">
        <Detail  :loaded="this.loaded.detail"></Detail>
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
      loaded: {
        overview: false,
        detail: false,
      },
      options: {
        licenseKey: 'Mykey',
        navigation: true,
        afterLoad: this.afterLoad,
      },
    };
  },
  methods: {
    afterLoad(origin, destination) {
      console.log('[Home]', destination);
      if (destination.index === 0) this.loaded.overview = true;
      if (destination.index === 1) this.loaded.detail = true;
    },
  },
};
</script>
