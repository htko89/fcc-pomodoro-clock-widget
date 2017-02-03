$( document ).ready( function() {

  var workTimer = new timer();
  var btnState = "play";

  $( "#btnPlay" ).click( function() {
    var interval = $( "#inputWork" ).val();
    console.log(btnState);
    if ( btnState === "play" ) {
      $( "#btnPlay i" ).removeClass( "fa-play" );
      $( "#btnPlay i" ).addClass( "fa-pause" );
      workTimer.start( interval, updateTimer, stopTimer );
      btnState = "pause"
    } else {
      $( "#btnPlay i" ).removeClass( "fa-pause" );
      $( "#btnPlay i" ).addClass( "fa-play" );
      workTimer.stop( pauseTimer );
      btnState = "play"
    }
  } );

  $( "#btnStop" ).click( function() {
    workTimer.stop( stopTimer );
  } );

  function updateTimer( time ) {
    $( "#inputWork" ).val( ( "0" + time ).slice( -2 ) );
  }

  function pauseTimer() {
    // $( "#inputWork" ).val( "55" );
  }

  function stopTimer() {
    $( "#inputWork" ).val( "00" );
  }

  function timer() {
    var time = 0;
    var timeStart = 0;
    var started = false;
    var timer_id;
    this.start = function( time, cbUpdateTimer, cbStopTimer ) {
      if ( !started ) {

        time *= 1000;
        timeStart = new Date().getTime();
        started = true;
        timer_id = setInterval( function() {
          var timeLeft = time - ( new Date().getTime() - timeStart );
          if ( timeLeft <= 0 ) {
            stop( cbStopTimer );
          } else {
            cbUpdateTimer( Math.round( timeLeft / 1000 ) )
          };
        }, 1000 ); // the smaller this number, the more accurate the timer will be}

      }
    }
    this.stop = function( cbStopTimer ) {
      if ( started ) {

        started = false;
        clearInterval( timer_id );
        cbStopTimer();

      }
    }
  }

} ); // end doc ready
