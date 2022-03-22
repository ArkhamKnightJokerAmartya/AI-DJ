song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
   canvas=createCanvas(700,600);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
  image(video,0,0,700,600);
  fill("#eb7134");
  stroke("#eb7134");
  if (scoreLeftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    InNumberleftwristY= Number(leftWristY);
    remove_decimals=floor(InNumberleftwristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume= "+volume;
    song.setVolume(setVolume)
  }
}

function preload(){
   song=loadSound("Song.mp3");
  

}

function play(){
  song.play();
  song.setVolume(1);
  song.rate(1);
}

function modelLoaded(){
  console.log("PoseNet has loaded");
  
}


function gotPoses(results){
  if (results.length > 0){
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist= "+scoreLeftWrist);
    
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
  leftWristY=results[0].pose.leftWrist.y;
  console.log("leftWristX= " +leftWristX+" leftWristY= "+leftWristY);

  rightWristX=results[0].pose.rightWrist.x;
  rightWristY=results[0].pose.rightWrist.y;
  console.log("rightWristX= " +rightWristX+" rightWristY= "+rightWristY);



  }
}