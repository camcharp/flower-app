<script>
import flowers from '../flowers.json'
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
    SearchBar,
    FlowersList
  },
  methods: {
    updateSearchedText: function(value) {
      this.searchedText = value;
    },
    updateSelectedSeasons: function(seasonObject) {
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
  <div class="wrapper">
    <SearchBar 
      @inputChange="updateSearchedText"
      @checkbox="updateSelectedSeasons"
      :seasons="selectedSeasons"
    />
    <FlowersList
      :flowers="filterFlowers(flowers, searchedText, selectedSeasons)"
    />
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Quicksand:wght@300;400;500;700&display=swap');
  .wrapper {
    width: 80%;
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif;
  }
  #flowers {
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
