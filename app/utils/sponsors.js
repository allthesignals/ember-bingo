import { dasherize } from '@ember/string';

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

const SPONSORS = [
  {
    "tier": "diamond",
    "name": "Inasmuch Foundation",
    "logo": "/images/logos/Inasmuch.png",
    "activity": {
      "description": "2020's Viva Las Sisu Treasure Hunt is proudly presented by the Inasmuch Foundation."
    }
  },
  {
    "tier": "gold",
    "name": "Haskell",
    "logo": "/images/logos/haskell.png",
    "activity": {
      "description": "Stop into Not Your Average Joe and tag yourself & the Viva Treasure Hunt to pick up a free sticker."
    }
  },
  {
    "tier": "gold",
    "name": "Spaces Realty",
    "logo": "/images/logos/spaces realty.png",
    "activity": {
      "description": "Explore Aqueous at Campbell Art Park"
    }
  },
  {
    "tier": "gold",
    "name": "The Atkinson Team",
    "logo": "/images/logos/atkinson group.png",
    "activity": {
      "description": "Beth Atkinson encurages you to perform a Random Act of Kindness."
    }
  },
  {
    "tier": "gold",
    "name": "Oklahoma Fidelity",
    "logo": "/images/logos/Oklahoma Fidelity Bank.png",
    "activity": {
      "description": "Check out one of our local favorites, Georges Happy Hog Bar-B-Q, on 23rd street between 11-7pm on Saturday."
    }
  },
  {
    "tier": "silver",
    "name": "Center for Economic Development Law",
    "logo": "/images/logos/center for econ dev law.png",
    "activity": {
      "description": "Confirm that you are registered to Vote (or help a friend!)"
    }
  },
  {
    "tier": "silver",
    "name": "Heartland Historical Properties",
    "logo": "/images/logos/hhp.png",
    "activity": {
      "description": "Post a selfie in front of HHP's sign at 3503 Oakhurst Drive in MWC - RIDDLE in window?"
    }
  },
  {
    "tier": "silver",
    "name": "Peace of Mind Pediatrics",
    "logo": "/images/logos/Peace of Mind Pedriatics.png",
    "activity": {
      "description": "Peace of Mind Pediatrics encourages you to enjoy a walk around Scissortail Park and snap a photo of your favorite part!"
    }
  },
  {
    "tier": "silver",
    "name": "Omega Investments",
    "logo": "/images/logos/Omega Investments.png",
    "activity": {
      "description": "Explore Eastside OKC public art at the With Love event on Saturday from 4-7pm or submit your favorite East OKC mural anytime! www.instagram.com/p/CFSCEzgjs9I/"
    }
  },
  {
    "tier": "silver",
    "name": "Freedom Oklahoma",
    "logo": "/images/logos/FO+Logo+Color+Transparent.png",
    "activity": {
      "description": "Freedom Oklahoma invites you to explore an exhibition showcasing local artists' interpretation of the theme UNIFIED at DNA Galleries in the Plaza. Submit the piece that impacts you the most."
    }
  },
  {
    "tier": "silver",
    "name": "James Cooper",
    "logo": "/images/logos/James Cooper.png",
    "activity": {
      "description": "Write a letter to an elected official encouraging them to fund homeless services."
    }
  },
  {
    "tier": "silver",
    "name": "Brandon - TOR",
    "logo": "/images/logos/The Other Room.png",
    "activity": {
      "description": ""
    }
  },
  {
    "tier": "silver",
    "name": "First American Title",
    "logo": "/images/logos/First American.png",
    "activity": {
      "description": "Selfie at a first american title - guessing game in window?"
    }
  },
  {
    "tier": "bronze",
    "name": "Sasquatch",
    "logo": "/images/logos/sasquatch.png",
    "activity": {
      "description": "Visit the Sasquatch Shaved Ice stand in Plaza for a free snow cone!"
    }
  },
  {
    "tier": "bronze",
    "name": "Factory Obscura",
    "logo": "/images/logos/Factory Obscura.png",
    "activity": {
      "description": "Take a selfie at Factory Obscura mix tape. Take advantage of BOGO tickets with the code FOLOVESSISU"
    }
  },
  {
    "tier": "bronze",
    "name": "Curbside",
    "logo": "/images/logos/curbside.png",
    "activity": {
      "description": "Buy a Curbside Chronicle and submit a photo of your favorite article."
    }
  },
  {
    "tier": "bronze",
    "name": "Holey Rollers",
    "logo": "/images/logos/holey-rollers.png",
    "activity": {
      "description": "Stop in at Holey Rollers in the Paseo to write an encouraging note to a homeless youth or Sisu staff member. Show your map to get a free drip coffee or $2 off any drink when you buy a donut!"
    }
  },
  {
    "tier": "bronze",
    "name": "1984 Studios",
    "logo": "/images/logos/1984+Studios+Logo+2020.png",
    "activity": {
      "description": "Take a selfie outside of 1984 studios! Post it to your story and send us a screenshot."
    }
  },
  {
    "tier": "bronze",
    "name": "Meridian Market",
    "logo": "/images/logos/meridian market.png",
    "activity": {
      "description": "Drop off new or gently used coats, jackets, etc. at Meridian Market. Show your treasure map here to recieve a FREE craft coffee (or specialty mocktail lemonade) with purchase of an entree."
    }
  },
  {
    "tier": "bronze",
    "name": "Core4",
    "logo": "/images/logos/Core4 Brewing Company.png",
    "activity": {
      "description": "Stop in at Core4 Brewery on Film Row to enjoy the patio weather. Show your Treasure Map and get $2 off a beer flight."
    }
  },
  {
    "tier": "bronze",
    "name": "Ideal Homes",
    "logo": "/images/logos/ideal homes.png",
    "activity": {
      "description": ""
    }
  },
  {
    "tier": "bronze",
    "name": "Revolucion",
    "logo": "/images/logos/revolucion.png",
    "activity": {
      "description": "Check in at Revolucion for their grand re-opening! Show your Treasure Map to snag a free taco!"
    }
  },
  {
    "tier": "bronze",
    "name": "Red Rooster",
    "logo": "/images/logos/red rooster.png",
    "activity": {
      "description": "Eat local! Visit during brunch, happy hur, or any time in between and get 15% off all food with the purchase of a cocktail or wine."
    }
  },
  {
    "tier": "bronze",
    "name": "Dig It",
    "logo": "/images/logos/dig it.png",
    "activity": {
      "description": "window selfie in your favorite sunnies"
    }
  },
  {
    "tier": "bronze",
    "name": "Castle row",
    "logo": "/images/logos/CASTLEROW_BLANK_W.png",
    "activity": {
      "description": "castle row - multimedia production have a mural wall of music icons that we could use to set up photo shoot. 2-5pm on Sat & Sun?"
    }
  },
].map(sponsor => ({
  ...sponsor,
  slug: dasherize(sponsor.name),
}));

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
