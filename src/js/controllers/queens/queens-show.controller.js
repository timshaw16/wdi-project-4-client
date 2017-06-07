angular
  .module('wdi-project-4-client')
  .controller('QueensShowCtrl', QueensShowCtrl);

QueensShowCtrl.$inject = ['Queen', '$stateParams'];
function QueensShowCtrl(Queen, $stateParams) {
  const vm = this;
  vm.queen = Queen.get($stateParams);
}
