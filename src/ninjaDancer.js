var makeNinjaDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ninjaDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step(timeBetweenSteps);

  //add our eventListners when building the node
  // $('.blinkyDancer').on('click', function(event){
  //   $('.blinkyDancer').css({'border': '20px solid green'})
  // });

};
makeNinjaDancer.prototype = Object.create(makeDancer.prototype);
makeNinjaDancer.prototype.constructor = makeNinjaDancer;

makeNinjaDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};