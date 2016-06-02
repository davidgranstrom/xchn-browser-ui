import Component from '../../base/Component';
import _ from 'underscore';
import $ from 'jquery';

export default class Knob extends Component {
  constructor(id, options) {
    super(id);

    this.options = _.extend({
      responsivity: 0.004,
      animate: 'none'
    }, options);

    this.component = $('<canvas>', {
      id: id,
      nx: 'dial'
    });
  }

  init() {
    super.init();
    // configure
    this.nx.responsivity = this.options.responsivity;
    this.nx.animate = this.options.animate;
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
