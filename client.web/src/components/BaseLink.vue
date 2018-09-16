<template>
  <a>
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
  * {
    font-family: "Roboto", "Nunito"
  },
  .btn {
    background: transparent;
    border: 1em solid black;
    border-radius: 30px;
    padding: 10px 20px;
    margin: 0px 10px;
    font-weight: bold;
  }
  .btn:hover {
    color: white;
    background: pink;
    border: 4px solid white;
    font-weight: bold;
    text-rendering: geometricPrecision;
  }
  .link {
    font-weight: bold;
    color: #7FB2F0;
    cursor: pointer;
  }
  .link:hover {
    color: #4C64C7;
  }
</style>
