angular
  .module('wdi-project-4-client')
  .factory('User', userFactory);


userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/register` }
  });
}

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/register` },
    'login': { method: 'POST', url: `${API}/login` }
  });
}