import Component from '@ember/component';
import { computed } from '@ember/object';
import { mapBy, alias, filterBy } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  tilesAdapter: service(),

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
  hasSimpleBingo: computed('tiles.@each.selected', function() {
    return this.tiles.filterBy('selected', true).length >= 5;
  }),

  isSubmitting: false,

  actions: {
    toggleTileSelect(tile) {
      this.router.transitionTo('tiles', tile.slug)
    },
    async submitResults() {
      this.set('isSubmitting', true);

      try {
        const result = await this.tilesAdapter.submitTiles();

        if (result.status >= 400) {
          throw new Error(`${result.status} ${result.statusText}`);
        }

        this.set('isSubmitting', false);
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
