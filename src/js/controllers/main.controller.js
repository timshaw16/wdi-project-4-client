angular
.module('wdi-project-4-client')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('$stateChangeSuccess',
  function(event, toState, toParams, fromState, fromParams) {
    $state.current = toState;

    if($state.current.url === '/') {
      vm.hideNavbar = true;
    } else {
      vm.hideNavbar = false;
    }
  }
);

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

}
