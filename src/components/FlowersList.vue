<script>
import flowers from '../flowers.json'
import SearchBar from './SearchBar'

const seasonMapping = {
  janvier: ['hiver'],
  février: ['hiver'],
  mars: ['hiver', 'printemps'],
  avril: ['printemps'],
  mai: ['printemps'],
  juin: ['été', 'printemps'],
  juillet: ['été'],
  aout: ['été'],
  septembre: ['automne', 'été'],
  octobre: ['automne'],
  novembre: ['automne'],
  décembre: ['automne', 'hiver']
}

const validMonths = Object.keys(seasonMapping);

function mapMonthsToSeasons(months) {
  const flowerSeason = [];
  months.forEach(month => {
    flowerSeason.push(...seasonMapping[month]);
  });
  return [... new Set(flowerSeason)]; // keep unique values
}

function formatMonths(months) {
  const lowerCaseMonths = months.toLowerCase();
  const arrayMonths = lowerCaseMonths.split(',');
  return arrayMonths;
}

function isMonthsListValid(months) {
  return months.every(month => validMonths.includes(month))
}

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

function areAllSeasonsUnchecked(selectedSeasons) {
  return Object.values(selectedSeasons).every(checked => {
    return checked === false;
  });
}

export default {
  name: 'flower-component',
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
    SearchBar
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
    ></SearchBar>
    <ul id="flowers">
      <li v-for="flower in filterFlowers(flowers, searchedText, selectedSeasons)" :key="flower.name" class="flower-tile">
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
