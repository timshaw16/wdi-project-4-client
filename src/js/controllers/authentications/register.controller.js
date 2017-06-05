angular
.module('wdi-project-4-client')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  // When we submit the form... this runs using ng-submit
  vm.register = () => {
    console.log('Fields in the form: ', vm.user);
    
    User
    .register(vm.user).$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  };
}
