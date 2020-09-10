import Component from '@ember/component';
import { mapBy, and, or, alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['bingo-board'],

  tilesAdapter: service(),

  /*  @title tiles
      @dev A collection of Ember objects that represent the buzzword
      and its selected state. Representing buzzword tiles as an array
      makes it easier to calculate a Bingo by rows and columns with
      division and modulos. Tiles come from tilesAdapter which abstracts
      the state management and caching of tiles to localStorage
  */
  tiles: alias('tilesAdapter.tiles'),
  tilesSelected: mapBy('tiles', 'selected'),

  actions: {
    toggleTileSelect(tile) {
      const selected = tile.get('selected');
      tile.set('selected', !selected);

      this.tilesAdapter.saveTiles();

      const win = this.win;
      this.set('showWin', win);
    }
  }
});
