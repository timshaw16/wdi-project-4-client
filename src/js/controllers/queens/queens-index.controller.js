angular
  .module('wdi-project-4-client')
  .controller('QueensIndexCtrl', QueensIndexCtrl);

QueensIndexCtrl.$inject = ['Queen'];
function QueensIndexCtrl(Queen){
  const vm = this;
  Queen.query()
  .$promise.then(queens => {
    queens.forEach(queen => {
      console.log(queen.drag_name);
    });
    console.log(queens.sort());
    vm.queens = queens;
  });

  

  // function = openNewWindow() {
  //
  // }

  // vm.sortQueens = (queens) =>{
  //   return queens.map((a,b) => {
  //     return a.drag_name > b.drag_name
  //   });
  // };
}
