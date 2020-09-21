
function setup(){
  canvas= createCanvas(250, 200);
  canvas.center();
  video= createCapture(VIDEO);
  video.hide();
  console.log('ml5 version:', ml5.version);
  classifier= ml5.imageClassifier('MobileNet',modelLoaded);
}


function draw(){
  image(video, 0,0, 250, 200);
  classifier.classify(video, gotResult);
}

function modelLoaded(){
  console.log("model loaded")
}


function gotResult(error, results){
  if(error) {
      console.log(error);
  }else{
      console.log(results);
      document.getElementById("result_object_name").innerHTML= results[0].label;
      document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);

  }
}



