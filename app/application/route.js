import Ember from 'ember';
const api = 'f0c5971a0a31c06f0879686cb6f37700';

export default Ember.Route.extend({
  model() {
      // return fetch(`http://api.petfinder.com/auth.getToken?key=${api}`)
      // .then(r => r.json());
  }
});
