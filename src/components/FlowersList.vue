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

export default {
  name: 'flower-component',
  data() {
    return {
      flowers: formatData(flowers),
      searchedText: ''
    }
  },
  components: {
    SearchBar
  },
  methods: {
    updateSearchedText: function(value) {
      this.searchedText = value;
    },
    filterFlowers(input, flowers) {
      const filteredFlowers = flowers.filter(flower => {
        return flower.name.toLowerCase().includes(input.toLowerCase());
      })
      return filteredFlowers;
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <SearchBar @inputChange="updateSearchedText"></SearchBar>
    <ul id="flowers">
      <li v-for="flower in filterFlowers(searchedText, flowers)" :key="flower.name" class="flower-tile">
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
          </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
