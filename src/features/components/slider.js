import Component from '../../base/Component';
import _ from 'underscore';
import $ from 'jquery';

export default class Slider extends Component {
  constructor(id, options) {
    super(id);

    this.options = _.extend({
      mode: 'absolute',
      hslider: false
    }, options);

    this.component = $('<canvas>', {
      id: id,
      nx: 'slider'
    });
  }

  init() {
    super.init();
    // configure
    this.nx.mode = this.options.mode;
    this.nx.hslider = this.options.hslider;
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
