import _ from 'underscore';
import $ from 'jquery';

export default class Slider {
  constructor(id, options) {
    this.id = id;
    this.options = _.extend({
      mode: 'absolute',
      hslider: false
    }, options);

    this.slider = $('<canvas>', {
      id: id,
      nx: 'slider'
    });
  }

  init($el) {
    this.nx = window.nx.widgets[this.id];

    console.log('this.nx', this.nx);
    this.nx.mode = this.options.mode;
    this.nx.hslider = this.options.hslider;
  }

  display($el) {
    $($el).append(this.slider);
  }

  update() {
    this.nx.draw();
  }

  set value(val) {
    this._value = val;
    this.nx.val = { value: val };

    this.update();
  }

  get value() {
    return this._value;
  }
}
