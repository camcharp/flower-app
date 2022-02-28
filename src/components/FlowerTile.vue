<script>
  export default {
    name: 'flower-tile-component',
    props: ['flowers']
  }
</script>

<template>
  <li v-for="flower in flowers" :key="flower.name" class="flower-tile">
    <img class="flower-picture" :src="require(`../assets/flowers/${flower.picture}`)" :alt="flower.name">
      <div class="flower-infos">
        <span class="flower-title">
          {{ flower.name }}
        </span>
        <span>
          {{ flower.category }}
        </span>
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
</template>

<style>
  .flower-picture {
    width: 100%;
    height: 60%;
    border-radius: 55px 55px 0 0;
  }
  .flower-tile {
    width: 350px;
    height: 450px;
    border-radius: 55px;
    background: #eeeded;
    box-shadow:  12px 12px 27px #dddcdc, -12px -12px 27px #ffffff;    
  }
  .flower-infos {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
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