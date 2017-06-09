angular
.module('wdi-project-4-client')
.controller('QueensShowCtrl', QueensShowCtrl);

QueensShowCtrl.$inject = ['Queen', '$stateParams', 'Comment', 'CurrentUserService'];
function QueensShowCtrl(Queen, $stateParams, Comment, CurrentUserService) {
  const vm = this;
  vm.createComment = createComment;
  vm.queen = Queen.get($stateParams);

  function createComment() {
    vm.comment.queen_id = parseInt($stateParams.id);
    vm.comment.user_id = CurrentUserService.currentUser.id;
    console.log(vm.comment);
    Comment
    .save(vm.comment)
    .$promise
    .then(comment => {
      vm.queen.comments.push(comment);
      vm.comment.body = '';
    });
  }
}
