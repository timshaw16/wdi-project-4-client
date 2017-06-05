angular
  .module('wdi-project-4-client')
  .controller('QueensIndexCtrl', QueensIndexCtrl);

QueensIndexCtrl.$inject = ['Queen'];
function QueensIndexCtrl(Queen){
  const vm = this;
  vm.queens = Queen.query();
}
