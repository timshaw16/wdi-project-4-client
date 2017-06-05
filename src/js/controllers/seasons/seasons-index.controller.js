angular
  .module('wdi-project-4-client')
  .controller('SeasonsIndexCtrl', SeasonsIndexCtrl);

SeasonsIndexCtrl.$inject = ['Season'];
function SeasonsIndexCtrl(Season){
  const vm = this;
  vm.seasons = Season.query();
}
