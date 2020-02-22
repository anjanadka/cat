var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}



$(document).ready(function(){
  $("p").mouseenter(function(){
    $("p").css("background-color", "yellow");
  });
});


function display(){
$( "li.list" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $(".button3")
      .toggleClass(".but");
      $(this)
      	 .next()
           .stop( true, true )
           .slideToggle();
       

    });

}



setInterval(function() {
    $(".item1").addClass('animating');
        
        setTimeout(function() {
            $(".item1").removeClass('animating');        
        }, 1000);
    
}, 3000);






