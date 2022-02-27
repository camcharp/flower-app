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

function areAllSeasonsUnchecked(selectedSeasons) {
  return Object.values(selectedSeasons).every(checked => {
    return checked === false;
  });
}

export {
  mapMonthsToSeasons,
  formatMonths,
  isMonthsListValid,
  areAllSeasonsUnchecked
}