angular
  .module('wdi-project-4-client')
  .controller('SeasonsShowCtrl', SeasonsShowCtrl);

SeasonsShowCtrl.$inject = ['Season', '$stateParams', 'Comment'];
function SeasonsShowCtrl(Season, $stateParams, Comment) {
  const vm = this;
  vm.createComment = createComment;
  vm.season = Season.get($stateParams);

  function createComment() {
    vm.comment.season_id = $stateParams.id;
    Comment
    .save(vm.comment)
    .$promise
    .then(comment => {
      vm.season.comments.push(comment);
      vm.comment.body = '';
    });
  }
}
