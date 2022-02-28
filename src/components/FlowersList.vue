<script>
  export default {
    name: 'flower-list-component',
    props: ['flowers'],
    components: {
    }
  }
</script>

<template>
  <ul id="flowers-list">
    <li v-for="flower in flowers" :key="flower.name" class="flower-tile">
      <img class="flower-picture" :src="require(`../assets/flowers/${flower.picture}`)" :alt="flower.name">
        <div class="flower-infos">
          <p class="flower-title">
            {{ flower.name }}
          </p>
          <ul class="flower-seasons">
            <li v-for="season in flower.seasons" :key="season" v-bind:class="`flower-season ${season}`">
              {{season}}
            </li>
          </ul>
          <ul class="flower-months">
            <li v-for="month in flower.months" :key="month">
              {{ month }}
            </li>
          </ul>
        </div>
    </li>
  </ul>
</template>

<style>
  .wrapper {
    width: 80%;
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif;
  }
  #flowers-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    gap: 4rem 5rem;
    margin: 0 6rem;
  }
  ul {
    padding: 0;
  }
  ul li {
    list-style: none;
  }
  .flower-picture {
    width: 100%;
    height: 60%;
    border-radius: 55px 55px 0 0;
  }
  .flower-tile {
    width: 350px;
    height: 500px;
    border-radius: 55px;
    background: #eeeded;
    box-shadow:  12px 12px 27px #dddcdc, -12px -12px 27px #ffffff;    
  }
  .flower-infos {
    padding: 0 2rem;
  }
  .flower-title {
    font-size: 1.3rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .flower-seasons, .flower-months {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: space-between;
    gap: 1rem 1rem;
  }
  .flower-season {
    background-color: #E0E0E0;
    padding: 0.5rem;
    border-radius: 16px;
  }
  .automne {
    background-color: darksalmon;
  }
  .hiver {
    background-color: lightblue;
  }
  .été {
    background-color: pink;
  }
  .printemps {
    background-color: mediumaquamarine;
  }
</style>