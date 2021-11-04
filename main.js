
song ="";
song1 = "";
function preload(){
 song = loadSound("music.mp3");
 song1 = loadSound("music1.mp3");
}
function setup(){
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet( video, modelLoaded);
poseNet.on("pose" , gotPoses);
}
function modelLoaded(){
console.log("model Loaded");
}
function gotPoses(results){

if(results.length > 0){
console.log(results);
leftwristX=results[0].pose.leftwristX.x;
leftwristY=results[0].pose.leftwristY.y;
console.log(" leftwrist x =" + leftwristX + "leftwrist y =" + leftwristY);
rightwristX=results[0].pose.rightwristX.x;
rightwristY=results[0].pose.rightwristY.y;
console.log(" rightwrist x =" + rightwristX + "rightwrist y =" + rightwristY);
}

}
function draw(){

image(video, 0 , 0 ,600 , 500);


}
function play() {

song.play();
song1.play();
}

