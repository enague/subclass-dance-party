var makeNinjaDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ninjaDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  //this.step(timeBetweenSteps);

  //add our eventListners when building the node
  var context = this
  $(document).on('click', '.ninjaDancer', function(event){
    //$(this).animate({'top': '60%', 'left': '45%' }, 'slow');
    $('.ninjaDancer').css({'background-image': 'url(images/smoke.gif'})
    context.step(10000);
  });

};
makeNinjaDancer.prototype = Object.create(makeDancer.prototype);
makeNinjaDancer.prototype.constructor = makeNinjaDancer;

makeNinjaDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  

  this.$node.css({'background-image': 'none'})
};