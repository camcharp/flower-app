const seasons = {
  hiver: {
    id: 'hiver',
    displayName: 'hiver'
  },
  printemps: {
    id: 'printemps',
    displayName: 'printemps'
  },
  ete: {
    id: 'ete',
    displayName: 'été'
  },
  automne: {
    id: 'automne',
    displayName: 'automne'
  }
}

const seasonMapping = {
  janvier: [seasons.hiver.id],
  février: [seasons.hiver.id],
  mars: [seasons.hiver.id, seasons.printemps.id],
  avril: [seasons.printemps.id],
  mai: [seasons.printemps.id],
  juin: [seasons.ete.id, seasons.printemps.id],
  juillet: [seasons.ete.id],
  aout: [seasons.ete.id],
  septembre: [seasons.automne.id, seasons.ete.id],
  octobre: [seasons.automne.id],
  novembre: [seasons.automne.id],
  décembre: [seasons.automne.id, seasons.hiver.id]
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

function areAllSeasonsUnchecked(seasonsStatus) {
  return Object.values(seasonsStatus).every(checked => {
    return checked === false;
  });
}

export {
  seasons,
  mapMonthsToSeasons,
  formatMonths,
  isMonthsListValid,
  areAllSeasonsUnchecked
}