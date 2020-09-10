function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

const SPONSORS = [
  {
    tier: 'diamond',
    name: 'B&E Pest Control',
    activity: {
      title: 'water 4 sisu',
      description: 'bring a case of bottled water to sisu, take a selfie'
    }
  },
  {
    tier: 'gold',
    name: 'CACI',
    activity: {
      title: 'plaza roll call',
      description: 'post a selfie in front of dig it in the plaza to your story, take a screen shot'
    }
  },
  {
    tier: 'gold',
    name: 'Old Republic Title',
    activity: {
      title: 'this is what democracy looks like',
      description: 'write a letter to an elected official encouraging them to fund homeless services'
    }
  },
  {
    tier: 'gold',
    name: 'Supreme Lending',
    activity: {
      title: 'Capitol Hill hello',
      description: 'Take a selfie outside of 1984 studios, post it to your story, take a screenshot'
    }
  },
  {
    tier: 'gold',
    name: 'Cafe 501',
    activity: {
      title: 'curbside collab',
      description: 'buy a curbside chronicle, take a selfie'
    }
  },
  {
    tier: 'silver',
    name: "Eileen's Cookies",
    activity: {
      title: 'all aboard',
      description: 'take a selfie featuring the train depot mural'
    }
  },
  {
    tier: 'silver',
    name: 'Hefner Grill',
    activity: {
      title: 'pick me up',
      description: 'write an encouraging letter to a homeless youth, drop it off at sisu'
    }
  },
  {
    tier: 'silver',
    name: 'OCD Cleaning',
    activity: {
      title: 'dont be an ass',
      description: 'like the mule on facebook, take a screenshot'
    }
  },
  {
    tier: 'silver',
    name: 'Rustic Cuff',
    activity: {
      title: 'Do the okie pokie',
      description: 'do the hokey pokey on the steps of the state capital, post the video to your story, tag sisu'
    }
  },
  {
    tier: 'silver',
    name: 'Salata',
    activity: {
      title: 'stronger together',
      description: 'buy a sisu stronger together shirt'
    }
  },
  {
    tier: 'silver',
    name: 'Lifetime Athletics',
    activity: {
      title: 'captain underpants',
      description: 'bring new underwear to sisu, socks count, no tighty whities'
    }
  },
  {
    tier: 'silver',
    name: '3Sixty',
    activity: {
      title: "Now it's time to get funky",
      description: 'take a selfie at factory obscura mix tape'
    }
  },
  {
    tier: 'silver',
    name: "Aunti Em's Sweets",
    activity: {
      title: 'wanderlust',
      description: 'check out aqueous at oklahoma contemporary, take a selfie'
    }
  },
  {
    tier: 'bronze',
    name: 'Barking Dog Bakery',
    activity: {
      title: 'winter is coming',
      description: 'bring a new or lightly used coat to sisu'
    }
  },
  {
    tier: 'bronze',
    name: 'CMG Financial - Lisa Pape',
    activity: {
      title: 'Slide to the left',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Elliot Roofing',
    activity: {
      title: 'Slide to the right',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Embassy Suites - Norman',
    activity: {
      title: 'Criss cross',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Firebirds - OKC',
    activity: {
      title: 'Cha cha now yall',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Jan Wysocki - personal donation',
    activity: {
      title: 'Hands on your knees',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Jana Thompson',
    activity: {
      title: 'Reverse, reverse',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Kendra Scott',
    activity: {
      title: 'Charlie brown',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Nothing Bundt Cakes',
    activity: {
      title: 'Two hops now yall',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: 'Oklahoma Fidelity Bank',
    activity: {
      title: 'Hands on your knees',
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: "Packard's",
    activity: {
      title: "Drop it like it's hot",
      description: ''
    }
  },
  {
    tier: 'bronze',
    name: "Rudy's BBQ",
    activity: {
      title: 'Pop lock and drop it',
      description: ''
    }
  },
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
