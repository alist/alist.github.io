var waves = {};
var lingrad = null;

var makeWave = function(containerId, filename){
  var wavesurfer = WaveSurfer.create({
    container: containerId,
    backend : 'MediaElement',
    waveColor: linearGradient,
    progressColor: 'hsla(200, 100%, 30%, 0.5)',
    minPxPerSec	: 0,
    maxCanvasWidth : 1000,
    cursorColor: '#fff',
    barWidth: 3
  });
  wavesurfer.load(filename, null);
  return wavesurfer;
};

$(document).ready(function(){
    var ctx = document.createElement('canvas').getContext('2d');
    linearGradient = ctx.createLinearGradient(0, 64, 0, 200);
    linearGradient.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
    linearGradient.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

    function setupWavePlayerOnClick(clickedElement){
      var waveName = clickedElement.currentTarget.parentElement.id;
      var audioElement = $(clickedElement.currentTarget).find(".audio").get()[0];
      
      function loadWaveAndSetCallbacks(){
        waves[waveName] = makeWave(audioElement, '/files/' + waveName +'.m4a');
        waves[waveName].on('ready',function(){
          waves[waveName].play();
        });
        waves[waveName].on('pause',function(){
          $('#' + waveName + ' .paused').removeClass('hidden');
          $('#' + waveName + ' .pauseBtn').addClass('hidden');
          $('#' + waveName + ' .playBtn').removeClass('hidden');
        });
        waves[waveName].on('play',function(){
          $('#' + waveName + ' .audio').removeClass('dim');
          $('#' + waveName + ' .paused').addClass('hidden');
          $('#' + waveName + ' .pauseBtn').removeClass('hidden');
          $('#' + waveName + ' .playBtn').addClass('hidden');
        }) ; 
        $('#' + waveName + ' .pauseBtn').click(function(){
          waves[waveName].pause(); return false;
        });
        $('#' + waveName + ' .playBtn').click(function(){
          waves[waveName].play(); return false;
        });
      }

      if (!waves[waveName]) {
        loadWaveAndSetCallbacks();
      }
      return false;
    }

    let idList = ["jun15plalistwmbr", "jun1plalistwmbr", "fourhoursintokyoclip", "gmahighschool", "gmatocalifornia", "gmawillmington10"];
    idList.forEach((playerSectionId) => {
      let playerElement = $("#" + playerSectionId).find(".player");
      playerElement.click(setupWavePlayerOnClick);
    });
  
  });
