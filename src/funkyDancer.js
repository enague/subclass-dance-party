var makeFunkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="funkyDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step(timeBetweenSteps);

  //add our eventListners when building the node
  // $('.funkyDancer').on('click', function(event){
  //   $('.funkyDancer').css({'border': '20px solid green'})

  // });

};
makeFunkyDancer.prototype = Object.create(makeDancer.prototype);
makeFunkyDancer.prototype.constructor = makeFunkyDancer;

makeFunkyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};


// ennague@gmail.com