import Component from '@ember/component';
import { computed } from '@ember/object';
import { mapBy, alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

const DIMENSION = [1, 2, 3, 4, 5];

const POSSIBLE_WINS = [
  // DIAGONALS
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],

  // ROWS ACROSS
  ...DIMENSION.reduce(acc => {
    if (acc[0]) return [acc[0].map(e => e + 5), ...acc];

    return [[0, 1, 2, 3, 4], ...acc];
  }, []),

  // COLS ACROSS
  ...DIMENSION.reduce(acc => {
    if (acc[0]) return [acc[0].map(e => e + 1), ...acc];

    return [[0, 5, 10, 15, 20], ...acc];
  }, []),
];

export default Component.extend({
  init(...args) {
    this._super(...args);

    this.set('userInfo', this.localStorage.getItem('USER_INFO') || {});
  },

  tilesAdapter: service(),
  localStorage: service(),

  router: service(),

  /*  @title tiles
      @dev A collection of Ember objects that represent the buzzword
      and its selected state. Representing buzzword tiles as an array
      makes it easier to calculate a Bingo by rows and columns with
      division and modulos. Tiles come from tilesAdapter which abstracts
      the state management and caching of tiles to localStorage
  */
  tiles: alias('tilesAdapter.tiles'),
  tilesSelected: mapBy('tiles', 'selected'),

  wins: computed('tiles.@each.selected', function() {
    let selectedIndices = [];

    this.tiles.forEach(tile => {
      if (tile.selected) {
        selectedIndices.push(true);
      } else {
        selectedIndices.push(false);
      }
    });

    return POSSIBLE_WINS.filter(scenario => {
      return scenario.every(index => {
        return selectedIndices[index];
      });
    });
  }),

  hasSimpleBingo: computed.gte('wins.length', 1),

  isSubmitting: false,

  promptSubmit: false,

  hasSubmittedOnce: computed('userInfo.hasSubmittedOnce', function() {
    return !!this.userInfo.hasSubmittedOnce;
  }),

  actions: {
    toggleTileSelect(tile) {
      this.router.transitionTo('tiles', tile.slug)
    },

    toggleSubmitPrompt() {
      this.toggleProperty('promptSubmit');
    },

    async submitResults() {
      this.set('isSubmitting', true);

      const user = this.localStorage.getItem('USER_INFO');

      const userInfo = Object.values(user).join('-');

      try {
        const result = await this.tilesAdapter.submitTiles(userInfo);

        if (result.status >= 400) {
          throw new Error(`${result.status} ${result.statusText}`);
        }

        this.set('isSubmitting', false);
        this.set('promptSubmit', false);
        this.localStorage.setItem('USER_INFO', {
          ...user,
          hasSubmittedOnce: true,
        });
        this.set('userInfo', this.localStorage.getItem('USER_INFO'));
      } catch (e) {
        this.set('isSubmitting', false);

        alert(`
          Hmmm... something went wrong submitting your results.

          Please try again, and take a screenshot as a backup.
        `);
      }
    }
  }
});
