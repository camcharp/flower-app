<script>
import SeasonButton from './SeasonButton'

export default {
  name: 'search-bar-component',
  props: ['seasons', 'searchInput'],
  data() {
    return {
    }
  },
  components: {
    SeasonButton
  },
  emits: ['inputChange', 'seasonClicked', 'resetSearch'],
  methods: {
    onInputChange(event) {
      this.$emit('inputChange', event.target.value);
    },
    selectSeasons(value) {
      this.$emit('seasonClicked',
      {
        season: value.season,
        checked: value.checked
      });
    },
    resetSearch() {
      this.$emit('resetSearch');
    }
  }
}
</script>

<template>
  <div id="search-filters">
    <div class="filter">
      <i class="gg-search"></i>
      <label for="flower-search">
        <span>Rechercher une fleur :</span>
      </label>
      <input
        type="search"
        @input="onInputChange"
        placeholder="pivoine"
        :value="searchInput"
      >
    </div>
    <div class="filter seasons">
      <span>Filtrer par saison de floraison : </span>
      <div class="seasons-wrapper">
        <div v-for="(value, key) in seasons" :key="key">
          <SeasonButton :isselected="value" :season="key" @seasonClicked="selectSeasons"/>
        </div>
      </div>
    </div>
    <div class="reset-search">
      <button @click="resetSearch">
        <i class="gg-undo"></i>
        réinitialiser 
      </button>
    </div>
  </div>
</template>

<style>
  #search-filters {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    color: #45494C;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 2px 10px 0 rgb(43 70 96 / 20%);
    margin-bottom: 1rem;
  }
  .reset-search {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 1rem;
  }
  .filter {
    box-sizing: border-box;
    min-height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 0.5rem;
    padding: 0 1rem;
    border-right: 1px solid #C3CAD0;
  }
  .filter input {
    font-family: 'Quicksand', sans-serif;
    padding: 6px 10px;
    border-radius: 16px;
    border: 1px solid #74747B;
  } 
  .seasons-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 0 1rem;
    gap: 1rem;
  }
  @media (max-width: 658px) {
    .filter {
      border-right: 0;
      padding: 10px;
      width: 100%;
    }
    .filter::after {
        content: "";
        position: absolute;
        border-top: 1px solid #C3CAD0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
    }
    .filter.seasons {
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .seasons-wrapper {
      align-items: center;
      justify-content: flex-start;
      margin: 0 0 1rem 0;
    }
    .reset-search {
      padding: 10px;
    }
  }
</style>