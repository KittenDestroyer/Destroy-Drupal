(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
  function randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

    var choise = prompt('Choose destruction method: gun, batman, kitten');

    if(choise == 'gun') {
      $('body').append('<audio id="audio"><source src="themes/learn/js/gunshot.ogg" type="audio/ogg"></source></audio>');
        $('.gunshot').css('width', '50px');
        $('.gunshot').css('height', '50px');
        $('.gunshot').css('background-image', 'url(gunshot.png)');
        $('.gunshot').css('background-size', 'cover');
      $('a').click(function(e){
        e.preventDefault();
        $('audio')[0].play();
        $(this).replaceWith('<div class="gunshot"></div>');
      })
    } else if (choise == 'batman') {
      $('body').append('<audio id="where"><source src="themes/learn/js/where.ogg" type="audio/ogg"></source></audio>' +
                        '<audio id="im-batman"><source src="themes/learn/js/batman.ogg" type="audio/ogg"></source></audio>');
      $('body').append('<div id="batman"></div>');
      $('#batman').css('width', '150px');
      $('#batman').css('height', '150px');
      $('#batman').css('position', 'absolute');
      $('#batman').css('background-image', 'url(http://www.airbrushskinart.com/ESW/Images/Batman.png)');
      $('#batman').css('background-size', 'cover');
      $('#batman').css('left', '-9999px');
      $('#batman').css('z-index', '999');
      $('a').click(function(e){
        e.preventDefault();
      var sound = randomIntFromInterval(1,2);
      var element = $(this);
      var position = element.offset();
      var top = position.top;
      var left = position.left;
      if(sound == 1){
        $('#im-batman')[0].play();
        $('#batman').animate({
          left: left,
          top: top,
        } , 'fast');
        $('#batman').animate({
          left: 999,
          top: 999,
        }, 'fast');
        element.replaceWith('<div class="batman-sign"></div>');
      } else if (sound == 2) {
        $('#where')[0].play();
        $('#batman').delay(3000).animate({
          left: left,
          top: top,
        } , 'fast');
        $('#batman').animate({
          left: 999,
          top: 999,
        }, 'fast');
        element.delay(3000).replaceWith('<div class="batman-sign"></div>');
      }


      });
    }
  }
};
})(jQuery);
