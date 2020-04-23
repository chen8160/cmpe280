<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      options: {
        licenseKey: 'Mykey',
      },
    };
  },
};
</script>
