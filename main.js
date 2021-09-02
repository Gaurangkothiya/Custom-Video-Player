window.addEventListener("load", function () {

	document.getElementById("first-video").onclick = function () {
		document.getElementById("myVideo").src = "madara.mp4";
		document.getElementById("myVideo").poster = "madara.jpg";
		myVideoVar.pause();
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-play fa-3x";
		myStatusVar.innerHTML = "Paused ...";
		myDurationVar.innerHTML = displayDurationFun();
		myVolumeButtonVar.addEventListener("click", muteUnmuteFun, false);
		myVolumeContainerVar.addEventListener("click", changeVolFun, false);
		myFullscreenButtonVar.addEventListener("click", screenSizeFun);
	}

	document.getElementById("second-video").onclick = function () {
		document.getElementById("myVideo").src = "maskoff.mp4";
		document.getElementById("myVideo").poster = "zenitsu.jpg";
		myVideoVar.pause();
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-play fa-3x";
		myStatusVar.innerHTML = "Paused ...";
		myDurationVar.innerHTML = displayDurationFun();
		myVolumeButtonVar.addEventListener("click", muteUnmuteFun, false);
		myVolumeContainerVar.addEventListener("click", changeVolFun, false);
		myFullscreenButtonVar.addEventListener("click", screenSizeFun);
	}

	document.getElementById("third-video").onclick = function () {
		document.getElementById("myVideo").src = "naruto.mp4";
		document.getElementById("myVideo").poster = "naruto.jpg";
		myVideoVar.pause();
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-play fa-3x";
		myStatusVar.innerHTML = "Paused ...";
		myDurationVar.innerHTML = displayDurationFun();
		myVolumeButtonVar.addEventListener("click", muteUnmuteFun, false);
		myVolumeContainerVar.addEventListener("click", changeVolFun, false);
		myFullscreenButtonVar.addEventListener("click", screenSizeFun);
	}

	document.getElementById("forth-video").onclick = function () {
		document.getElementById("myVideo").src = "yourname.mp4";
		document.getElementById("myVideo").poster = "yourname.jpg";
		myVideoVar.pause();
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-play fa-3x";
		myStatusVar.innerHTML = "Paused ...";
		myDurationVar.innerHTML = displayDurationFun();
		myVolumeButtonVar.addEventListener("click", muteUnmuteFun, false);
		myVolumeContainerVar.addEventListener("click", changeVolFun, false);
		myFullscreenButtonVar.addEventListener("click", screenSizeFun);
	}

	document.getElementById("fifth-video").onclick = function () {
		document.getElementById("myVideo").src = "itachi.mp4";
		document.getElementById("myVideo").poster = "itachi.png";
		myVideoVar.pause();
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-play fa-3x";
		myStatusVar.innerHTML = "Paused ...";
		myDurationVar.innerHTML = displayDurationFun();
		myVolumeButtonVar.addEventListener("click", muteUnmuteFun, false);
		myVolumeContainerVar.addEventListener("click", changeVolFun, false);
		myFullscreenButtonVar.addEventListener("click", screenSizeFun);
	}

	//
	//
	//
	//
	//
	//
	//
	//
	//


	smplVideoPlayerVar = document.getElementById("smplVideoPlayer");
	myVideoVar = document.getElementById("myVideo");
	myFullscreenButtonVar = document.getElementById("fullscreenButton");
	myDurationVar = document.getElementById("duration");
	myPlayButtonVar = document.getElementById("playButton");
	myVolumeButtonVar = document.getElementById("volumeButton");
	myVolumeContainerVar = document.getElementById("volumeContainer");
	myVolumeBarVar = document.getElementById("volumeBar");
	myStatusVar = document.getElementById("status");
	myStreamContainerVar = document.getElementById("streamContainer");
	myStreamBarVar = document.getElementById("streamBar");
	myVideoVar.load();
	myVideoVar.addEventListener("canplay", function () {
		myPlayButtonVar.addEventListener("click", playPauseFun, false);

		myStreamContainerVar.addEventListener("click", jumpFun, false);

		myDurationVar.innerHTML = displayDurationFun();
		myVolumeButtonVar.addEventListener("click", muteUnmuteFun, false);
		myVolumeContainerVar.addEventListener("click", changeVolFun, false);

		myFullscreenButtonVar.addEventListener("click", screenSizeFun);

	}, false)






}, false);



function playPauseFun() {
	if (myVideoVar.paused) {
		myVideoVar.play();
		updatemyStreamBarVar = setInterval(streamingFun, 10);
		myPlayButtonVar.className = "fa fa-pause fa-3x";
		myStatusVar.innerHTML = "Playing ...";
	} else {
		myVideoVar.pause();
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-play fa-3x";
		myStatusVar.innerHTML = "Paused ...";
	}
}

function streamingFun() {
	var percentage = (myVideoVar.currentTime / myVideoVar.duration) * 100;
	myStreamBarVar.style.width = percentage + "%";
	myDurationVar.innerHTML = displayDurationFun();
	if (myVideoVar.ended) {
		window.clearInterval(updatemyStreamBarVar);
		myPlayButtonVar.className = "fa fa-repeat fa-3x";
	}
}

function jumpFun(pos) {
	var mousePosX = pos.pageX - (smplVideoPlayerVar.offsetLeft - myStreamContainerVar.offsetLeft);
	var streamContainerWidth = window.getComputedStyle(streamContainer).getPropertyValue("width");
	streamContainerWidth = parseFloat(streamContainerWidth.substr(0, streamContainerWidth.length - 2));
	myVideoVar.currentTime = (mousePosX / streamContainerWidth) * myVideoVar.duration;
	streamingFun();
}

function displayDurationFun() {
	var seconds = Math.round(myVideoVar.currentTime);
	var minutes = Math.floor(seconds / 60);
	if (minutes > 0) {
		seconds -= minutes * 60;
	}
	if (seconds.toString().length === 1) {
		seconds = "0" + seconds;
	}
	if (minutes.toString().length === 1) {
		minutes = "0" + minutes;
	}

	var totalSeconds = Math.round(myVideoVar.duration);
	var totalMinutes = Math.floor(totalSeconds / 60);
	if (totalMinutes > 0) {
		totalSeconds -= totalMinutes * 60;
	}
	if (totalSeconds.toString().length === 1) {
		totalSeconds = "0" + totalSeconds;
	}
	if (totalMinutes.toString().length === 1) {
		totalMinutes = "0" + totalMinutes;
	}

	return minutes + ":" + seconds + " / " + totalMinutes + ":" + totalSeconds;
}

function muteUnmuteFun() {
	if (myVideoVar.muted) {
		myVideoVar.muted = false;
		myVolumeButtonVar.className = "fa fa-volume-up fa-3x";
		myVolumeBarVar.style.display = "block";
	} else {
		myVideoVar.muted = true;
		myVolumeButtonVar.className = "fa fa-volume-off fa-3x";
		myVolumeBarVar.style.display = "none";
	}
}

function changeVolFun(pos) {
	var mousePosX = pos.pageX - smplVideoPlayerVar.offsetLeft - myVolumeContainerVar.offsetLeft;
	var volumeContainerWidth = window.getComputedStyle(volumeContainer).getPropertyValue("width");
	volumeContainerWidth = parseFloat(volumeContainerWidth.substr(0, volumeContainerWidth.length - 2));
	myVideoVar.volume = (mousePosX / volumeContainerWidth);
	myVolumeBarVar.style.width = (mousePosX / volumeContainerWidth) * 100 + "%";
	if (myVideoVar.muted) {
		myVideoVar.muted = false;
		myVolumeButtonVar.className = "fa fa-volume-up fa-3x";
		myVolumeBarVar.style.display = "block";
	}
}

function screenSizeFun() {
	if (myVideoVar.requestFullscreen) {
		myVideoVar.requestFullscreen();
	} else if (myVideoVar.webkitRequestFullscreen) {
		myVideoVar.webkitRequestFullscreen();
	} else if (myVideoVar.mozRequestFullscreen) {
		myVideoVar.mozRequestFullscreen();
	} else if (myVideoVar.msRequestFullscreen) {
		myVideoVar.msRequestFullscreen();
	}
}

