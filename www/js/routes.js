angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.schedule', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu.favorites', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('menu.messages', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('menu.lostAndFound', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lostAndFound.html',
        controller: 'lostAndFoundCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.eventInformation', {
    url: '/page5',
	params: {
		eventId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventInformation.html',
        controller: 'eventInformationCtrl'
      }
    }
  })

  .state('menu.eventInformation2', {
    url: '/page7',
	params: {
		eventId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventInformation2.html',
        controller: 'eventInformation2Ctrl'
      }
    }
  })

  .state('menu.announcement', {
    url: '/page9',
	params: {
		messageId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/announcement.html',
        controller: 'announcementCtrl'
      }
    }
  })

  .state('menu.itemFound', {
    url: '/page8',
	params: {
		itemId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/itemFound.html',
        controller: 'itemFoundCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});