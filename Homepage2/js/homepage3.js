var backgroundVideo =  document.getElementById('backgroundVideo')

backgroundVideo.addEventListener('timeupdate', function() {
var videoCurrentTime = backgroundVideo.currentTime;
    if (videoCurrentTime >= 12) {
        backgroundVideo.pause()
      }
});
