<template>
  <div class="home">
    <section>
      <Overview :loaded="this.loaded.overview"></Overview>
    </section>
    <section>
      <Detail  :loaded="this.loaded.detail"></Detail>
    </section>
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
    };
  },
  methods: {
  },
};
</script>
