onkeyup = onkeydown = function(e)
{
    e=e||event; //to deal with IE
    state.keyPressed[e.keyCode]=e.type=='keydown'?true:false;
    
    e.preventDefault();
}