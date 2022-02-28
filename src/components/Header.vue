<script>
export default {
  name: 'header-component'
}
</script>

<template>
  <header>
    <h1>
      <a href="/">
        Fleurs de saison
      </a>
    </h1>
  </header>
</template>

<style>
  header {
    display: block;
    height: 65px;
    width: 100%;;
    z-index: 100;
    position: relative;
    left: 0px;
    top: 0px;
    color: #f5f7f5;
    background: #1A916E;
  }
  header h1 {
    font-size: 1.6rem;
    padding-left: 10%;
    margin: 0;
    line-height: 65px;
    font-weight: 500;
  }
  header a {
    cursor: pointer;
    text-decoration: none;
    color: #f5f7f5
  }
</style>