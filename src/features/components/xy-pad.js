import Component from '../../base/Component';
import _ from 'underscore';
import $ from 'jquery';

export default class XYPad extends Component {
  constructor(id, options) {
    super(id);

    this.options = _.extend({
      nodeSize: 10,
      animate: 'none'
    }, options);

    this.component = $('<canvas>', {
      id: id,
      nx: 'position'
    });
  }

  init() {
    super.init();
    // configure
    this.nx.nodeSize = this.options.nodeSize;
    this.nx.animate = this.options.animate;
  }

  set value(val = {}) {
    this._value = val;
    this.nx.val = { x: val.x, y: val.y };

    this.update();
  }

  get value() {
    return this._value;
  }
}
