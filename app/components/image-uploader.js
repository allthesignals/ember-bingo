import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ImageUploaderComponent extends Component {
  @action
  handleFile(tile, e) {
    console.log(e.target.files);
  }
}
