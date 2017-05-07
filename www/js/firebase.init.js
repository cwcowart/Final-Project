angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDTBdzOzjnIFu7LCfhnydIoYhLnpkwIT1I",
    authDomain: "mobile-app-project-c7334.firebaseapp.com",
    databaseURL: "https://mobile-app-project-c7334.firebaseio.com",
    storageBucket: "mobile-app-project-c7334.appspot.com",
  };
  firebase.initializeApp(config);

})

.service("ScheduleInfo", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("schedule");
    var schedule = $firebaseArray(ref);
    var events = {
        'schedule' : schedule
    };
    return events;
}])

.service("SaveInfo", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("save");
    var save = $firebaseArray(ref);
    var saves = {
        'save' : save
    };
    return saves;
}])

.service("OtherInfo", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("other");
    var info = $firebaseArray(ref);
    var information = {
        'info' : info
    };
    return information;
}])

.service("MessageInfo", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("message");
    var message = $firebaseArray(ref);
    var messages = {
        'message' : message
    };
    return messages;
}]);