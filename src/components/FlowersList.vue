<script>
export default {
  name: 'flower-list-component',
  props: ['flowers']
}
</script>

<template>
  <ul id="flowers-list">
    <li v-for="flower in flowers" :key="flower.name" class="flower-tile">
      <img class="flower-picture" :src="require(`../assets/flowers/${flower.picture}`)" :alt="flower.name">
        <div id="flower-infos">
          <p class="flower-title">
            {{ flower.name }}
          </p>
          <ul class="flower-seasons">
            <li v-for="season in flower.seasons" :key="season">
              {{ season }}
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
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Quicksand:wght@300;400;500;700&display=swap');
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
    gap: 2rem 2rem;
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
  .flower-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    padding: 0 0 0 2rem;
  }
  .flower-seasons, .flower-months {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: space-between;
    gap: 1rem 1rem;
  }
</style>