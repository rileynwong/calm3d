var isMute = false;
var oldSrc = "";

var $player = $('#sounds-player');
var $sounds = $('#sounds');

var toggleMute = function () {
  var $player = document.getElementById('sounds-player');
  var $instructions = $('#instructions');

  if (isMute) {
    // unmute
    $player.play();
    $instructions.html('m to mute<br><br>' +
      'click and drag to look around<br>' +
      'arrow keys to pan');
  } else {
    // mute sounds
    $player.pause();
    $instructions.html('m to ummute<br><br>click and drag to look around<br>arrow keys to pan');
  }
  isMute = !isMute;
}

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   // 'm'
   if (key == 77) {
      console.log('m key pressed');
      toggleMute();
   }
}


// on-click buttons
var toOcean = function () {
  $sounds.attr("src", 'assets/mp3s/ocean.mp3');
  console.log('ocean noises');

  $player.load();
}

var toClouds = function () {
  $sounds.attr("src", 'assets/mp3s/wind.wav');
  console.log('wind noises');

  $player.load();
}