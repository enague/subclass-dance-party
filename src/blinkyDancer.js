var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step(timeBetweenSteps);

  //add our eventListners when building the node
  // $('.blinkyDancer').on('click', function(event){
  //   $('.blinkyDancer').animate(
  //     {'border': '20px solid green'
  //      //,'border-radius': '20px'        
  //    }, 400)
  //   $('.blinkyDancer').css({'border': '20px solid green'})
  // });

  $('.blinkyDancer').on('click', function(event){
    $('.blinkyDancer').css({'border': '20px solid green'})
  });

};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};   