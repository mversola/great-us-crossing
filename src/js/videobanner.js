$(function() {

  // Video
  $('#page-header').vide({
    'mp4': 'video/video',
    'webm': 'video/video',
    'ogv': 'video/video'
  }, {
    posterType: 'jpg'
  });

  // If the video isn't working, hide it
  var interval = setInterval(function() {
    var instance = $('#page-header').data('vide');
    instance.getVideoObject();
    if (instance.$video[0].paused && instance.$video[0].currentTime <= 0) {
      $('#page-header video').css('display', 'none');
    } else {
      $('#page-header video').css('display', 'block');
      clearTimeout(interval);
    }
  }, 50);

});