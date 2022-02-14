//var nothing = "nothing"
//var nothing2 = "nothing2"

Webcam.set ({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML ='<img id="My-Object" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/v9MIuJrUd/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!!!");
}

function check() {
    img = document.getElementById('My-Object');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("RESULTS: " + results);
        document.getElementById("result_object_name").innerHTML = "Object :  " + results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = "Accuracy :  " + results[0].confidence.toFixed(3);
    }
}

