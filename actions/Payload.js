import { Actions } from 'flummox';

export default class PayloadActions extends Actions {
  async getData() {
    let response;

    try {
      const url = 'http://localhost:8080/api';
      response = await fetch(url);
      return await response.json();
    }
    catch(err) {
      console.log('ERROR: ' + err);
    }
  }
}
