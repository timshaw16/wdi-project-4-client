angular
  .module('wdi-project-4-client')
  .controller('SeasonsShowCtrl', SeasonsShowCtrl);

SeasonsShowCtrl.$inject = ['Season', '$stateParams'];
function SeasonsShowCtrl(Season, $stateParams) {
  const vm = this;
  vm.season = Season.get($stateParams);
}
