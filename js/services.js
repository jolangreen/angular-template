'use strict';

//////////////////
// User Service //
/////////////////
/**
 * This factory is responsible for managing
 * users in this application
 * @dependency  $http   Angular service to use Ajax calls
 * @return      object  All setter/getter methods for users
 */
myApp.factory('UserService', ['$http', function($http){
    return {
//      Available method(s)
//      |
//      |
//      V
        getAll: function() {
            return $http.get('api/users.json');
        }
    }
}])
