<script>
import flowers from '../flowers.json'

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
  data() {
    return {
      flowers: formatData(flowers)
    }
  },
  name: 'flower-component',
  methods: {
  }
}
</script>

<template>
  <div class="wrapper">
    <ul id="flowers">
      <li v-for="flower in flowers" :key="flower.name">
        {{flower}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
