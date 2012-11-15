/*
Draw image with scaling to draw a canvas image that is half the size of the original video.
Function to check if video is playing with scaling parameters.

By Samet Kohen

*/
	
	function drawVideo(video,canvas1,canvas2) {
		if(video.paused || video.ended) return false;
		canvas1.drawImage(video,0,0,320,180);
		canvas2.drawImage(video,0,0,160,90);
		timeoutSet(drawVideos,25,video,canvas1,canvas2);
	}
