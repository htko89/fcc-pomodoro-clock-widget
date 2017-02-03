$( document ).ready( function() {



} ); // end doc ready
function timer( time, update, complete ) {
  var start = new Date().getTime();
  var interval = setInterval( function() {
    var now = time - ( new Date().getTime() - start );
    if ( now <= 0 ) {
      clearInterval( interval );
      complete();
    } else update( Math.floor( now / 1000 ) );
  }, 1000 ); // the smaller this number, the more accurate the timer will be
}
