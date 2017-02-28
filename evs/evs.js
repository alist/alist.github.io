var space = [["Scientists find 7 Earth-like planets orbiting nearby ultracool star", "Skip 39 light-years across our galaxy, and you’ll arrive at Trappist-1, an ultracool dwarf star with a band of special followers.","http://www.pbs.org/newshour/rundown/watch-heres-nasa-may-found-beyond-solar-system/"],["SpaceX to Fly Passengers On Private Trip Around the Moon in 2018", "SpaceX will fly two private citizens on a trip around the moon in 2018, the company's founder Elon Musk announced Monday.","http://www.space.com/35844-elon-musk-spacex-announcement-today.html"]];

var earth = [["North Korea calls ballistic missile test-fire a success", "North Korea says it has successfully completed the launch of a new ballistic missile, according to state media.","http://www.cnn.com/2017/02/11/asia/north-korea-missile/"],["Canada's Glaciers Are Causing Global Sea Levels To Rise","Canada's melting glaciers have become a major contributor to the globe's rising sea levels," ,"http://www.huffingtonpost.ca/2017/02/21/canada-glaciers_n_14918978.html"],["A majority of white evangelicals approve of Trump's Muslim ban","Banning Syrian refugees as well as citizens of seven majority-Muslim countries from entering the U.S. — is much more popular among some groups than others.", "https://mic.com/articles/169779/a-majority-of-white-evangelicals-approve-of-trump-s-muslim-ban#.0ROxWnsVa"]];

var maxImg = 11;
var randImg = function(){
  var i = Math.floor(Math.random() * (maxImg +1));
  var str = "url(/evs/img/" + i + ".jpg)";
  console.log(str);
  return str;
};

var randHead = function(){
  var str = null;
  var url = null;
  if (Math.random() > 0.5){
    var i = Math.floor(Math.random() * space.length);
    str = space[i][0];
    url = space[i][2];
  } else {
    var ii = Math.floor(Math.random() * earth.length);
    str = earth[ii][0];
    url = earth[ii][2];
  }
  console.log(str);
  return [str, url];
};

var randFoot = function(){
  var str = null;
  if (Math.random() > 0.5){
    var i = Math.floor(Math.random() * space.length);
    str = space[i][1];
  } else {
    var ii = Math.floor(Math.random() * earth.length);
    str = earth[ii][1];
  }
  console.log(str);
  return str;
};

$(document).ready(function(){
  $('.evs').css('background-image',randImg());
  var head = randHead();
  $('.evsHeader').text(head[0]);
  $('.evsHeader').attr("href",head[1]);
  $('.evsFooter').text(randFoot());
});
