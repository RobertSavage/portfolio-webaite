const button = document.querySelector(".Instagram_Engadgment_button")
const close = document.querySelector(".close")
const Instagram_Engadgment_video = document.querySelector(".Instagram_Engadgment_video")
const video = document.querySelector("video")

button.addEventListener('click', ()=>{
	Instagram_Engadgment_video.style.visibility = "visible";
	Instagram_Engadgment_video.style.opacity = 1;
});

close.addEventListener('click', ()=>{
	Instagram_Engadgment_video.style.visibility = "hidden";
	Instagram_Engadgment_video.style.opacity = 0;

	video.pause();
	video.currentTime = 0;
});




const button_trip = document.querySelector(".trip_advisor_scraper_button")
const close_trip = document.querySelector(".close_trip")
const trip_advisor_scraper_video = document.querySelector(".trip_advisor_scraper_video")
const video_trip = document.querySelector(".trip_advisor_scraper_video video")

button_trip.addEventListener('click', ()=>{
	trip_advisor_scraper_video.style.visibility = "visible";
	trip_advisor_scraper_video.style.opacity = 1;
});

close_trip.addEventListener('click', ()=>{
	trip_advisor_scraper_video.style.visibility = "hidden";
	trip_advisor_scraper_video.style.opacity = 0;

	video_trip.pause();
	video_trip.currentTime = 0;
});





const button_reddit_data = document.querySelector(".Reddit_Person_Data_button")
const close_reddit_data = document.querySelector(".close_reddit_data")
const Reddit_Person_Data_video = document.querySelector(".Reddit_Person_Data_video")
const video_reddit_data = document.querySelector(".Reddit_Person_Data_video video")

button_reddit_data.addEventListener('click', ()=>{
	Reddit_Person_Data_video.style.visibility = "visible";
	Reddit_Person_Data_video.style.opacity = 1;
});

close_reddit_data.addEventListener('click', ()=>{
	Reddit_Person_Data_video.style.visibility = "hidden";
	Reddit_Person_Data_video.style.opacity = 0;

	video_reddit_data.pause();
	video_reddit_data.currentTime = 0;
});







const button_reddit_user = document.querySelector(".Reddit_user_scraper_button")
const close_reddit_user = document.querySelector(".close_reddit_user")
const reddit_user_scraper_video = document.querySelector(".reddit_user_scraper_video")
const video_reddit_user = document.querySelector(".reddit_user_scraper_video video")

button_reddit_user.addEventListener('click', ()=>{
	reddit_user_scraper_video.style.visibility = "visible";
	reddit_user_scraper_video.style.opacity = 1;
});

close_reddit_user.addEventListener('click', ()=>{
	reddit_user_scraper_video.style.visibility = "hidden";
	reddit_user_scraper_video.style.opacity = 0;

	video_reddit_user.pause();
	video_reddit_user.currentTime = 0;
});









const button_insta_acc = document.querySelector(".instagram_account_finder_button")
const close_insta_acc = document.querySelector(".close_instagram_account_finder")
const instagram_account_finder_video = document.querySelector(".instagram_account_finder_video")
const video_insta_acc = document.querySelector(".instagram_account_finder_video video")

button_insta_acc.addEventListener('click', ()=>{
	instagram_account_finder_video.style.visibility = "visible";
	instagram_account_finder_video.style.opacity = 1;
});

close_insta_acc.addEventListener('click', ()=>{
	instagram_account_finder_video.style.visibility = "hidden";
	instagram_account_finder_video.style.opacity = 0;

	video_insta_acc.pause();
	video_insta_acc.currentTime = 0;
});