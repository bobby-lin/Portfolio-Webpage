/**
 * Created on: 16/12/15
 *     Author: Bobby Lin
 */

$('.nav a').on('click', function(){
    $(".navbar-toggle:visible").click();
    var adjustment = 50;
    var speed = 1;
    var header = this.hash;
    $('html,body').animate({
        scrollTop: $(header).offset().top - adjustment
    }, speed);
    
});
