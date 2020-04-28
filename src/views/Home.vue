<template>
  <div class="home">
    <section>
      <Overview :loaded="this.loaded.overview"></Overview>
    </section>
      <section ref="sec">
        <Detail  :loaded="false" ></Detail>
      </section>
      <section>
        <Detail  :loaded="true"></Detail>
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
  mounted() {
    window.addEventListener('scroll', (e) =>{
      // console.log(this.$refs)
    })
  },
  methods: {
  },
};
</script>
