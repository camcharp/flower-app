<script>
  export default {
    name: 'flower-card-component',
    props: ['flowers', 'seasonsStatus']
  }
</script>

<template>
  <li v-for="flower in flowers" :key="flower.name" class="flower-card">
    <img class="flower-picture" :src="require(`../assets/flowers/${flower.picture}`)" :alt="flower.name">
      <div class="flower-infos">
        <h2 class="flower-title">
          {{ flower.name }}
        </h2>
        <p class="flower-seasons-wrapper">
          <i class="gg-calendar"></i>
          <span>Période de floraison :</span>
        </p>
          <ul class="flower-seasons">
            <li v-for="(value, season) in seasonsStatus" :key="value" class="flower-season" v-bind:class="{ active: flower.seasons.includes(season) }">
              {{ season }}
            </li>
          </ul>
        <ul class="flower-months">
          <li v-for="month in flower.months" :key="month">
          </li>
        </ul>
      </div>
  </li>
</template>

<style>
  .flower-card {
    width: 350px;
    height: 470px;
    border-radius: 55px;
    background: #eeeded;
    box-shadow:  12px 12px 27px #dddcdc, -12px -12px 27px #ffffff;
  }
  .flower-picture {
    width: 100%;
    height: 60%;
    border-radius: 55px 55px 0 0;
    object-fit: cover;
  }
  .flower-infos {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
  }
  .flower-title {
    position: relative;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 400;
  } 
  .flower-title::after {
    content: "";
    position: absolute;
    border-top: 1px solid #C3CAD0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
  }
  .flower-seasons-wrapper {
    display: flex;
    align-content: center;
    gap: 10px;
    justify-content: flex-start;
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

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flower-season:not(.active) {
    opacity: 0.5;
    text-decoration: line-through;
  }
  .flower-season.active {
    background-color: #C2D1A9;
  }
  @media (max-width: 658px) {
    .flower-card {
      width: 90%;
      height: auto;
    }
    .flower-picture {
      max-height: 170px;
    }
    .flower-title {
      font-size: 1rem;
    }
  }
</style>