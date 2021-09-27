


function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uiqiGdH3V/ ' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error , results){

    if(error){
        console.log(results);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255 ) + 1 ;
        random_number_g = Math.floor(Math.random() * 255 ) + 1 ;
        random_number_b = Math.floor(Math.random() * 255 ) + 1 ;

        document.getElementById("result_label").innerHTML = "I can hear - " +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = " Accuracy - " +
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_g+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_g+")";


        img = document.getElementById('dog1');
        img1 = document.getElementById('cat2');
        img2 = document.getElementById('horse3');
        img3 = document.getElementById('wolf4');



        if(results[0].label == "barking"){
            img.src = 'dog-01.gif';
            img1.src = 'cat-02.jpg';
            img2.src = 'horse-03.jpg';
            img3.src = 'wolf-04.jpg';
        }
        else if(results[0].label == "meowing"){
            img.src = 'dog-01.jpg';
            img1.src = 'cat-02.gif';
            img2.src = 'horse-03.jpg';
            img3.src = 'wolf-04.jpg';
        }
        else if(results[0].label == "horse"){

            img.src = 'dog-01.jpg';
            img1.src = 'cat-02.jpg';
            img2.src = 'horse-03.gif';
            img3.src = 'wolf-04.jpg';
        }
        else{
            img.src = 'dog-01.jpg';
            img1.src = 'cat-02.jpg';
            img2.src = 'horse-03.jpg';
            img3.src = 'wolf-04.gif';
        }
    }
}