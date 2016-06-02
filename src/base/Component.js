import _ from 'underscore';
import $ from 'jquery';

export default class Component {
  constructor(id) {
    this.id = id;
  }

  init() {
    this.nx = window.nx.widgets[this.id];
  }

  display($el) {
    $($el).append(this.component);
  }

  update() {
    this.nx.draw();
  }
}
