<template>
  <div class="home">
<!--     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header class="header">
      <img src="../assets/Logo.png" alt="SoFlo Tech Logo" class="logo">
      <nav>
        <ul class="nav">
          <li><BaseLink href="">Dicks</BaseLink></li>
          <li><BaseLink href="">Dicks</BaseLink></li>
          <li><BaseLink href="">Dicks</BaseLink></li>
          <li><BaseLink href="">Dicks</BaseLink></li>
          <li><BaseLink href="">Dicks</BaseLink></li>
        </ul>
      </nav>
    </header>
<!--     <img src="../assets/Header.png" alt="SoFlo Tech Banner" class="banner"> -->
<!--     <h1>hello</h1> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import BaseLink from '@/components/BaseLink.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    BaseLink,
  },
};
</script>

<style lang="scss" scoped>
  * {
    font-family: "Roboto", "Nunito";
  }
  header.header {
    background-image: url('../assets/Header.png');
    background-position: bottom;
    height: 100vh;
  }
  header img.logo {
    width: 1100px;
    padding-top: 35px;
  }
  .nav {
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    border: 1px solid banner;
  }
</style>
