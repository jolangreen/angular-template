'use strict';

/////////////////////
// Base Controller //
/////////////////////
/**
 * Its a good practice to have an Base Controller in your application.
 * Usually controllers are responsible for one view only, and Base Controller
 * is you global controller for things like Authentication, Menus, etc.
 */
                                  // Here we are injecting $scope
                                  // as our dependency. Must be declared
                                  // in these two spots.
//                                   |                              |
//                                   V                              V
myApp.controller('BaseController', ['$scope', '$location', function($scope, $location){
    // Set active class on the current menu item
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? 'active' : '';
    };

}]);

/////////////////////
// Home Controller //
/////////////////////
myApp.controller('HomeController', ['$scope', function($scope){

    // Contents for the first post, whatever property you
    // assign to $scope object will be available on your view (html file)
    $scope.title = 'Hello, this is your home page';
    $scope.content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    $scope.createdAt = '19852024524';


    // You can also assign a list of posts in an array
    $scope.posts = [
        {
            title: 'Post 1',
            content: 'Lorem ipsum dolor.',
            createdAt: '1288323623006'
        },
        {
            title: 'Post 2',
            content: 'Lorem ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing.',
            createdAt: '1288323623006'
        },
        {
            title: 'Post 3',
            content: 'Lorem ipsum dolor. Lorem ipsum.',
            createdAt: '1288323623006'
        },
    ];

    $scope.savePost = function() {
        // get current date and assign to the newPost object
        var currentDate = new Date;
        $scope.newPost.createdAt = currentDate.getTime();

        // include new post to posts array
        $scope.posts.push($scope.newPost);

        //clear newPost after insert
        $scope.newPost = {};
    };

}]);

//////////////////////
// Users Controller //
//////////////////////
/**
 * In this controller we are going to make use of a service
 * called UserService that we defined in our services.js file.
 * This same service can be use multiple times across multiples pages
 */
myApp.controller('UsersController', ['$scope', 'UserService', function($scope, UserService){
    // Call the service method getAll and assign it to users variable
    UserService.getAll().success(function(data){
        $scope.users = data;
    });
}]);
