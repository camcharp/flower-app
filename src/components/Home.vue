<script>
import flowers from '../flowers.json'
import Header from './Header'
import FlowersList from './FlowersList'
import SearchBar from './SearchBar'
import {
  mapMonthsToSeasons,
  formatMonths,
  isMonthsListValid,
  areAllSeasonsUnchecked
} from '../utils/seasons.js'

function formatData(flowers) {
  return flowers.map(flower => {
    const formattedMonths = formatMonths(flower.months);
    return {
      ...flower,
      isValid: isMonthsListValid(formattedMonths),
      months: formattedMonths,
      seasons: mapMonthsToSeasons(formattedMonths)
    }
  });
}

export default {
  name: 'home-component',
  data() {
    return {
      flowers: formatData(flowers),
      searchedText: '',
      selectedSeasons: {
        hiver: false,
        printemps: false,
        été: false,
        automne: false,
      }
    }
  },
  components: {
    Header,
    SearchBar,
    FlowersList
  },
  methods: {
    updateSearchedText: function(input) {
      this.searchedText = input;
    },
    updateSelectedSeasons: function(seasonObject) {
      console.log('seasonObject', seasonObject);
      this.selectedSeasons[seasonObject.season] = seasonObject.checked;
    },
    filterFlowers(flowers, input, selectedSeasons) {
      const filteredFlowers = flowers.filter(flower => {
        let isFlowerMatchingSearchText = true;
        let isFlowerMatchinSeasons = true;
        if (input) {
          isFlowerMatchingSearchText = flower.name.toLowerCase().includes(input.toLowerCase());
        }

        if (!areAllSeasonsUnchecked(selectedSeasons)) {
          isFlowerMatchinSeasons = flower.seasons.some(season => {
            return selectedSeasons[season] === true;
          });
        }
        return isFlowerMatchingSearchText && isFlowerMatchinSeasons;
      })
      return filteredFlowers;
    }
  }
}
</script>

<template>
  <Header/>
  <main class="wrapper">
    <SearchBar 
      @inputChange="updateSearchedText"
      @checkbox="updateSelectedSeasons"
      :seasons="selectedSeasons"
    />
    <FlowersList
      :flowers="filterFlowers(flowers, searchedText, selectedSeasons)"
    />
  </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Quicksand:wght@300;400;500;700&display=swap');
  body {
    background-color: #f5f7f5;
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .wrapper {
    width: 100%;
  }
</style>
