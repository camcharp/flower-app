<script>
import SeasonButton from './SeasonButton'

export default {
  name: 'search-bar-component',
  props: ['seasons'],
  data() {
    return {
    }
  },
  components: {
    SeasonButton
  },
  emits: ['inputChange', 'checkbox'],
  methods: {
    onInputChange(event) {
      this.$emit('inputChange', event.target.value);
    },
    onCheckSeason(value) {
      console.log('emit value', value);
      this.$emit('checkbox',
      {
        season: value.season,
        checked: value.checked
      });
    }
  }
}
</script>

<template>
  <div id="search-filters">
    <div class="filter">
      <label for="flower-search">
        <p>
          Rechercher un nom de fleur :
        </p>
      </label>
      <input
        type="search"
        @input="onInputChange"
        placeholder="pivoine"
      >
    </div>
    <div class="filter">
      <span>
        Filtrer par saison de disponibilité :
      </span>
      <div class="seasons-wrapper">
        <div v-for="(value, key) in seasons" :key="key">
          <SeasonButton :isselected="value" :season="key" @checkbox="onCheckSeason"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #search-filters {
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    color: #2b4660;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 2px 10px 0 rgb(43 70 96 / 20%);
    margin-bottom: 3rem;
  }
  .filter {
    box-sizing: border-box;
    min-height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 8px 0;
    margin: 0 0 0 7rem;
  }
  .seasons-wrapper {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 1rem;
    gap: 1rem;
  }
</style>