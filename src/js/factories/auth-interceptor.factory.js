angular
.module('wdi-project-4-client')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    // Any response going out of the app
    request(config) {
      const token = TokenService.getToken();
      if (config.url.indexOf(API) === 0 && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    // Any response coming back to the app
    response(res) {
      if (res.config.url.indexOf(API) === 0 && res.data.token) {
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}
