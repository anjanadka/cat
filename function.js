 $('.pic').mousemove(function blurrr(event) {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;
    var mask = $('#mask1 circle')[0];
    mask.setAttribute("cy", (upY - 5) + 'px');
    mask.setAttribute("cx", (upX) + 'px');
});