import $ from 'jquery';
// import ChannelComponent from 'ui/channelComponent'
import Slider from './features/components/slider';
import XYPad from './features/components/xy-pad';
import Knob from './features/components/knob';

const nx = window.nx;
nx.globalWidgets = false; // don't create global variables
// nx.colorize();

var slider = new Slider('test');
slider.display('#container'); // we need to call display for nexusui to work properly..

var xy = new XYPad('xy-test', { animate: 'bounce' });
xy.display('#container');

var knob = new Knob('knob-test');
knob.display('#container');

nx.onload = () => {
  console.log('loaded nexusui');
  slider.init(); // init after nexusui is ready
  slider.value = 0.5;

  xy.init();
  xy.value = { x: 0.5, y: 0.5 };

  knob.init();
};

