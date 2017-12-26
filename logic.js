var config = {
    apiKey: "AIzaSyA33WBrszYI0h8_retlTc5cvVVINGzPB4Q",
    authDomain: "train-time-project-ac2e8.firebaseapp.com",
    databaseURL: "https://train-time-project-ac2e8.firebaseio.com",
    projectId: "train-time-project-ac2e8",
    storageBucket: "",
    messagingSenderId: "627547870093"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  

  var firstTime;
  

  $("#addTrain").submit(function(event){
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var dest = $("#train-dest-input").val().trim();
    // var firstTrain = moment($("#train-time-input").val().trim(), "hh:mm").format("X");
    firstTime = $("#train-time-input").val().trim();
    var freq = $("#train-freq-input").val().trim();

    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment(currentTime).format("hh:mm");
    console.log("current time" + currentTime);
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("difference in time" + diffTime);
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);
    var tRemainder = diffTime % freq;
    // var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
    // console.log(tRemainder);
    var minutesTilTrain = freq - tRemainder;
    console.log("minutes til train" + minutesTilTrain);

    var tilNextTrain = moment().add(minutesTilTrain, "minutes");
    console.log("til next train: " + tilNextTrain);

    var nextArrival = moment().add(minutesTilTrain, "minutes");
    console.log(moment(nextArrival).format("hh:mm"));
    var newTrain = {
        name: trainName,
        destination: dest,
        firstTrain: firstTime,
        frequency: freq
    };
    
    database.ref().push(newTrain);
    $("#trainTable > tbody").append(`<tr><td>${trainName}</td><td>${dest}</td><td>${freq} </td><td>${moment(nextArrival).format("hh:mm")}</td><td>${minutesTilTrain}</td></tr>`);
  $("#addTrain")[0].reset();
  });