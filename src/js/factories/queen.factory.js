angular
  .module('wdi-project-4-client')
  .factory('Queen', queenFactory);

queenFactory.$inject = ['API', '$resource'];
function queenFactory(API, $resource){
  return $resource(`${API}/queens/:id`, { id: '@_id'}, {});
}
