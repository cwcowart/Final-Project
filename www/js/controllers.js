angular.module('app.controllers', [])
  
.controller('scheduleCtrl', ['$scope', '$stateParams', 'ScheduleInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ScheduleInfo) {
$scope.events = ScheduleInfo.schedule;

}])
   
.controller('favoritesCtrl', ['$scope', '$stateParams', 'SaveInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, SaveInfo) {
$scope.saves = SaveInfo.save;

}])
   
.controller('messagesCtrl', ['$scope', '$stateParams', 'MessageInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MessageInfo) {
$scope.messages = MessageInfo.message;

}])
   
.controller('lostAndFoundCtrl', ['$scope', '$stateParams', 'OtherInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OtherInfo) {
$scope.information = OtherInfo.info;

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventInformationCtrl', ['$scope', '$stateParams', 'ScheduleInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ScheduleInfo) {

$scope.events = ScheduleInfo.schedule;
$scope.params = $stateParams;

var eventIds = {};

for(var i=0; i < $scope.events.length; i++){
    eventIds[$scope.events[i].eventId] = $scope.events[i];
    
}

$scope.event = eventIds[$scope.params.eventId];
}])
   
.controller('eventInformation2Ctrl', ['$scope', '$stateParams', 'SaveInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, SaveInfo) {

$scope.saves = SaveInfo.save;
$scope.params = $stateParams;

var eventIds = {};

for(var i=0; i < $scope.saves.length; i++){
    eventIds[$scope.saves[i].eventId] = $scope.saves[i];
    
}

$scope.save = eventIds[$scope.params.eventId];
}])
   
.controller('announcementCtrl', ['$scope', '$stateParams', 'MessageInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MessageInfo) {

$scope.messages = MessageInfo.message;
$scope.params = $stateParams;

var messageIds = {};

for(var i=0; i < $scope.messages.length; i++){
    messageIds[$scope.messages[i].messageId] = $scope.messages[i];
    
}

$scope.message = messageIds[$scope.params.messageId];
}])
   
.controller('itemFoundCtrl', ['$scope', '$stateParams', 'OtherInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OtherInfo) {

$scope.information = OtherInfo.info;
$scope.params = $stateParams;

var itemIds = {};

for(var i=0; i < $scope.information.length; i++){
    itemIds[$scope.information[i].itemId] = $scope.information[i];
    
}

$scope.info = itemIds[$scope.params.itemId];
}])
 