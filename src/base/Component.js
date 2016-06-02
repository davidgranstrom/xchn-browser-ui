import _ from 'underscore';
import $ from 'jquery';
import { OSCDispatcher } from './Dispatcher';

export default class Component {
  constructor(id) {
    this.id = id;
  }

  init() {
    this.nx = window.nx.widgets[this.id];
    // forward data to the dispatcher
    this.nx.on('*', OSCDispatcher);
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
