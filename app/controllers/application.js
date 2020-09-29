import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service
  tilesAdapter;

  @action
  async submitResults() {
    try {
      await this.tilesAdapter.submitTiles();
    } catch (e) {
      alert(`
          Hmmm... something went wrong submitting your results.

          Please try again, and take a screenshot as a backup.
        `);
    }
  }
}
