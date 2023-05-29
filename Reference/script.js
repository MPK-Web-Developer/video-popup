function toggleButton() {
	let video_fix_div = document.querySelector(".video-fix-div");
	video_fix_div.classList.toggle("active");
	let video = document.querySelector(".video");
	// this script is not working in a youtube popup video
	video.pause();
	video.currentTime = 0;
}
// let's write 3 line jquery code for stop background music
$(function () {
	// #close and iframe direct call from html file no need to store any variable
	$("#close").click(function () {
		$("iframe").attr("src", $("iframe").attr("src"));
	});
});
