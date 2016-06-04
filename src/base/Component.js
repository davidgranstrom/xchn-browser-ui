import _ from 'underscore';
import $ from 'jquery';
import dispatcher from './Dispatcher';

export default class Component {
  constructor(id) {
    this.id = id;
  }

  init() {
    this.nx = window.nx.widgets[this.id];
    // forward data to the dispatcher
    this.nx.sendsTo(dispatcher.send);
  }

  display($el) {
    if(this.component) {
      $($el).append(this.component);
    } else {
      throw new Error('Must define component in subclass for', this.id);
    }
  }

  update() {
    this.nx.draw();
  }
}
