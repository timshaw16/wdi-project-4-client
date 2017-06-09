angular
  .module('wdi-project-4-client')
  .controller('CommentsNewCtrl', CommentsNewCtrl);

CommentsNewCtrl.$inject = ['API', '$state', 'Comment'];
function CommentsNewCtrl(API, $state, Comment) {
  const vm  = this;

  vm.create = commentsCreate;


  function commentsCreate(){
    return Comment
      .save({ comment: vm.comment })
      .$promise
      .then(() => {
        $state.go('commentsIndex');
      });
  }
}
