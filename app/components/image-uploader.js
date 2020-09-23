import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class ImageUploaderComponent extends Component {
  @action
  async handleFile(file) {
    const fileType = file.blob.type;
    const extension = file.extension;

    const resp = await fetch('/.netlify/functions/upload-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileType, extension }),
    });

    const signature = await resp.json();
    const parsedYouAreEll = new URL(signature.uploadURL);

    try {
      await file.uploadBinary(signature.uploadURL, {
        method: 'PUT',
      });

      this.args.didUpload(`${parsedYouAreEll.origin}${parsedYouAreEll.pathname}`);
    } catch (e) {
      console.log(e);

      alert('Hmm, something went wrong. Check your internet connection and try again.', e.toString());
    }
  }
}
