// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function(top, left) {
  //See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};