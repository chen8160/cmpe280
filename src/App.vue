<template>
  <div id="app">
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item @click="redirect('/industry')">Industry</el-menu-item>
      <el-menu-item @click="redirect('/overview')">Overview</el-menu-item>
      <el-menu-item @click="redirect('/detail')">Detail</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    redirect(url) {
      window.location.replace(window.location.origin + url)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>
