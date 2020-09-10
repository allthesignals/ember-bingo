function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

const TEST_SPONSORS = [
  {
    name: 'Apple',
    tier: 'diamond',
    activity: {
      title: 'Do a thing',
      description: 'Take a photo by a thing',
    },
  },
  ...(generateFakeSponsors('bronze', 12, ['The Mule', 'The Boom', 'Sonic'])),
  ...(generateFakeSponsors('silver', 8, ['Loves', 'QuickTrip', 'Baseball'])),
  ...(generateFakeSponsors('gold', 4, ['QuickEMart', 'Pear'])),
];

function generateFakeSponsors(tier, count, names = ['']) {
  const randomName = () => names[randomNumber(names.length)];

  return Array.from({ length: count }).map(() => ({
    name: randomName(),
    tier: tier,
    activity: {
      title: 'Do a thing',
      description: 'Take a photo by a thing',
    },
  }));
}

const SPONSORS = [
  ...TEST_SPONSORS, // replace with real data later!
];

// tmp
let sponsors = [];

export function getSponsor(tier) {
  if (sponsors.length === 0) {
    sponsors = SPONSORS.slice(0);
  }

  const tierIndices = sponsors.map((e, i) => e.tier === tier ? i : '').filter(String);
  const randomIndex = tierIndices[randomNumber(tierIndices.length)];

  return sponsors.splice(randomIndex, 1)[0];
}

export default SPONSORS;
