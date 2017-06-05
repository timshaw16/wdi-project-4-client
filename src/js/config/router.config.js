angular
  .module('wdi-project-4-client')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
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
  .state('queensIndex', {
    url: '/queens',
    templateUrl: '/js/views/queens/index.html',
    controller: 'QueensIndexCtrl',
    controllerAs: 'queensIndex'
  });

  $urlRouterProvider.otherwise('/');
}
