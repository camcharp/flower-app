<script>
export default {
  name: 'header-component'
}
</script>

<template>
  <header>
    <h1>Fleurs de saison</h1>
  </header>
</template>

<style>
  header {
    display: block;
    height: 75px;
    width: 100vw;
    z-index: 100;
    position: relative;
    left: 0px;
    top: 0px;
    color: #f5f7f5;
    background: #1A916E;
  }
  header h1 {
    font-size: 1.6rem;
    padding-left: 7rem;
    margin: 0;
    line-height: 75px;
  }
</style>