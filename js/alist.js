var waves = {};
var lingrad = null;

var makeWave = function(id, filename, waveformData){
  var wavesurfer = WaveSurfer.create({
    container: id,
    backend : 'MediaElement',
    waveColor: linGrad,
    progressColor: 'hsla(200, 100%, 30%, 0.5)',
    minPxPerSec	: 0,
    maxCanvasWidth : 1000,
    cursorColor: '#fff',
    barWidth: 3
  });
  wavesurfer.load(filename,waveformData);
  return wavesurfer;
};

$(document).ready(function(){
  console.log($('#5hrstokyo'));
    var ctx = document.createElement('canvas').getContext('2d');
    linGrad = ctx.createLinearGradient(0, 64, 0, 200);
    linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
    linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

    function clickAudio(a){
      var name = a.currentTarget.id;
      function then(waveformData){
        waves[name] = makeWave('#' + a.currentTarget.id,'/files/' + name +'.m4a', waveformData);
        waves[name].on('ready',function(){
          waves[name].play();
        });
        waves[name].on('pause',function(){
          $('#'+name).addClass('playBtn');
          $('#'+name).removeClass('pauseBtn');
        });
        waves[name].on('play',function(){
          $('#'+name).removeClass('playBtn');
          $('#'+name).addClass('pauseBtn');
        });
      }
      if (!waves[name]) {
        var waveformData = a.currentTarget.getAttribute('waveformdata');
        if (waveformData){
          $.getJSON(waveformData, function(data){ then(data); });
        } else {
          then();
        }
      } else {
        // waves[name].playPause();
      }
      return false;
    }

    $('#fourhoursintokyoclip').click(clickAudio);
    $('#gmahighschool').click(clickAudio);
    $('#gmatocalifornia').click(clickAudio);
    $('#gmawillmington10').click(clickAudio);
});
