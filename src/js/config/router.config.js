angular
  .module('wdi-project-4-client')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('loginRegPage', {
    url: '/',
    templateUrl: '/js/views/dragrace.html'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('seasonsIndex', {
    url: '/seasons',
    templateUrl: '/js/views/seasons/index.html',
    controller: 'SeasonsIndexCtrl',
    controllerAs: 'seasonsIndex'
  })
  .state('seasonsShow', {
    url: '/seasons/:id',
    templateUrl: '/js/views/seasons/show.html',
    controller: 'SeasonsShowCtrl',
    controllerAs: 'seasonsShow'
  })
  .state('queensIndex', {
    url: '/queens',
    templateUrl: '/js/views/queens/index.html',
    controller: 'QueensIndexCtrl',
    controllerAs: 'queensIndex'
  })
  .state('queensShow', {
    url: '/queens/:id',
    templateUrl: '/js/views/queens/show.html',
    controller: 'QueensShowCtrl',
    controllerAs: 'queensShow'
  })

  .state('giphyIndex', {
    url: '/giphy',
    templateUrl: '/js/views/giphy/index.html',
    controller: 'GiphyIndexCtrl',
    controllerAs: 'giphyIndex'
  })

  .state('videosIndex', {
    url: '/videos',
    templateUrl: '/js/views/videos/index.html',
    controller: 'VideosIndexCtrl',
    controllerAs: 'videosIndex'
  })

  .state('quotesIndex', {
    url: '/quotes',
    templateUrl: '/js/views/quotes/index.html',
    controller: 'quotesIndexCtrl',
    controllerAs: 'QuotesIndex'
  });



  $urlRouterProvider.otherwise('/');
}
