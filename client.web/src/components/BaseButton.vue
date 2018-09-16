<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {},
};
</script>

<style lang="scss" scoped>
  * {
    font-family: "Roboto", "Nunito"
  }
  .btn {
    background: transparent;
    border: 0.3em solid black;
    border-radius: 30em;
    padding: 1em 2em;
    margin: 0em 10em;
    font-weight: bold;
  }
  .btn:hover {
    color: white;
    background: pink;
    border: 0.3em solid white;
    font-weight: bold;
    text-rendering: geometricPrecision;
  }
</style>
