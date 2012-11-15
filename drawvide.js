	function drawVideo(video,canvas1,canvas2) {
		if(video.paused || video.ended) return false;
		canvas1.drawImage(video,0,0,320,180);
		canvas2.drawImage(video,0,0,160,90);
		timeoutSet(drawVideos,25,video,canvas1,canvas2);
	}
