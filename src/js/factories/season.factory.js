angular
  .module('wdi-project-4-client')
  .factory('Season', seasonFactory);

seasonFactory.$inject = ['API', '$resource'];
function seasonFactory(API, $resource){
  return $resource(`${API}/seasons/:id`, { id: '@_id'}, {});
}
