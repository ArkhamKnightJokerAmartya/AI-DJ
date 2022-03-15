song="";
function setup(){
   canvas=createCanvas(700,600);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
}

function draw(){
  image(video,0,0,700,600);
}

function preload(){
   song=loadSound("Song.mp3");
}

function play(){
  song.play();
}