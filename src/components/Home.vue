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
      months: formattedMonths,
      isValid: isMonthsListValid(formattedMonths),
      seasons: mapMonthsToSeasons(formattedMonths)
    }
  });
}
export default {
  name: 'home-component',
  data() {
    return {
      flowers: formatData(flowers),
      searchParams: {
        searchedText: '',
        selectedSeasons: {
          hiver: false,
          printemps: false,
          été: false,
          automne: false,
        }
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
      this.searchParams.searchedText = input;
    },
    updateSelectedSeasons: function(seasonObject) {
      this.searchParams.selectedSeasons[seasonObject.season] = seasonObject.checked;
    },
    resetSearchParams: function() {
      this.searchParams = {
        searchedText: '',
        selectedSeasons: {
          hiver: false,
          printemps: false,
          été: false,
          automne: false,
        }
      };
    },
    filterFlowers(flowers, searchParams) {
      const filteredFlowers = flowers.filter(flower => {
        let isFlowerMatchingSearchText = true;
        let isFlowerMatchinSeasons = true;
        if (searchParams.searchedText) {
          isFlowerMatchingSearchText = flower.name.toLowerCase().includes(searchParams.searchedText.toLowerCase());
        }

        if (!areAllSeasonsUnchecked(searchParams.selectedSeasons)) {
          isFlowerMatchinSeasons = flower.seasons.some(season => {
            return searchParams.selectedSeasons[season] === true;
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
      @seasonClicked="updateSelectedSeasons"
      @resetSearch="resetSearchParams"
      :seasons="searchParams.selectedSeasons"
      :searchInput="searchParams.searchedText"
    />
    <FlowersList
      :flowers="filterFlowers(flowers, searchParams)"
      @resetSearch="resetSearchParams"
    />
  </main>
</template>

<style>
  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Quicksand:wght@300;400;500;700&display=swap');
  /* icons */
  @import url('https://css.gg/search.css');
  @import url('https://css.gg/add.css');
  @import url('https://css.gg/remove.css');
  @import url('https://css.gg/undo.css');
  @import url('https://css.gg/radio-check.css');
  @import url('https://css.gg/radio-checked.css');
  
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
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    padding: 0.6rem 2rem;
    border-radius: 16px;
    border: 1px solid #74747B;
    font-weight: 500;
    background: #EBEBEB;
    color: #45494C;
  }
  button:hover {
    background: #C2D1A9;
  }
  button:active {
    background: #B2C19B;
  }
</style>
