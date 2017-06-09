angular
  .module('wdi-project-4-client')
  .controller('GiphyIndexCtrl', GiphyIndexCtrl);

GiphyIndexCtrl.$inject = ['$http'];
function GiphyIndexCtrl($http) {
  const vm = this;

  $http.get(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=rupauls drag race`)
  .then(response => {
    console.dir(response);

    vm.gifs = response.data.data;
  }, err => {
    console.error(err);
  });
}
