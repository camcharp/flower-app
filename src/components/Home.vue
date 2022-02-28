<script>
import flowers from '../flowers.json'
import Header from './Header'
import FlowersList from './FlowersList'
import SearchBar from './SearchBar'
import {
  seasons,
  mapMonthsToSeasons,
  formatMonths,
  isMonthsListValid,
  areAllSeasonsUnchecked
} from '../utils/seasons.js'

function getInitialState() {
  return {
    searchedText: '',
    seasonsStatus: {
      [seasons.hiver.id]: false,
      [seasons.printemps.id]: false,
      [seasons.ete.id]: false,
      [seasons.automne.id]: false,
    }
  };
}

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
      searchParams: getInitialState()
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
    updateseasonsStatus: function(seasonObject) {
      this.searchParams.seasonsStatus[seasonObject.season] = seasonObject.checked;
    },
    resetSearchParams: function() {
      this.searchParams = getInitialState();
    },
    filterFlowers(flowers, searchParams) {
      const filteredFlowers = flowers.filter(flower => {
        let isFlowerMatchingSearchText = true;
        let isFlowerMatchinSeasons = true;

        if (searchParams.searchedText) {
          isFlowerMatchingSearchText = flower.name.toLowerCase().includes(searchParams.searchedText.toLowerCase());
        }

        if (!areAllSeasonsUnchecked(searchParams.seasonsStatus)) {
          isFlowerMatchinSeasons = flower.seasons.some(season => {
            return searchParams.seasonsStatus[season] === true;
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
      @seasonClicked="updateseasonsStatus"
      @resetSearch="resetSearchParams"
      :seasons="searchParams.seasonsStatus"
      :searchInput="searchParams.searchedText"
    />
    <FlowersList
      :flowers="filterFlowers(flowers, searchParams)"
      :seasonsStatus="searchParams.seasonsStatus"
      @resetSearch="resetSearchParams"
    />
  </main>
</template>

<style>
  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');
  /* icons */
  @import url('https://css.gg/search.css');
  @import url('https://css.gg/undo.css');
  @import url('https://css.gg/radio-check.css');
  @import url('https://css.gg/radio-checked.css');
  @import url('https://css.gg/calendar.css');
  @import url('https://css.gg/check.css');
  
  body {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--main-white);
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
    border: 1px solid var(--main-grey);
    font-weight: 500;
    background: #EBEBEB;
    color: var(--dark-grey);
  }
  button:hover {
    background: var(--light-green);
  }
  button:active {
    background: #B2C19B;
  }
</style>
