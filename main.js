noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/y8BGT24D/download.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,300,300);
   image(clown_nose,noseX-15 ,noseY+15, 50, 30);


}
function modelLoaded(){
    console.log("posenet has no errors :)");
}



function take_snapshot(){
    save("clown.png");
}
function gotposes(results){
    if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose coordinate x is "+ noseX);
console.log("Nose coordinate y is "+ noseY);
}
}


