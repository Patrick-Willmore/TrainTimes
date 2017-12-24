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

  $("#addTrain").submit(function(event){
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var dest = $("#train-dest-input").val().trim();
    var firstTrain = moment($("#train-time-input").val().trim(), "hh:mm").format("X");
    var freq = $("#train-freq-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: dest,
        firstTrain: firstTrain,
        frequency: freq
    };
    
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);
  });