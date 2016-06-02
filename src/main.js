import $ from 'jquery';
var nx = window.nx;

nx.onload = () => {
  console.log('loaded nexusui');
  // setup nexusui callbacks here
};

var $multislider = $('<canvas>').attr('nx', 'multislider');
$('#container').append($multislider);
