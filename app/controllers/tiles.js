import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TilesController extends Controller {
  @service
  tilesAdapter;

  @action
  successfulUpload(uploadUrl) {
    this.model.set('image', uploadUrl);

    this.tilesAdapter.saveTiles();
  }
}
