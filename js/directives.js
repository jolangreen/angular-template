'use strict'

myApp.directive('userCard', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/user-card.html'
    }
}),

myApp.directive('ctaIcons', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/cta-icons.html'
    }
}),

myApp.directive('ctaImageText', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/cta-image-text.html'
    }
}),

myApp.directive('galleryImage', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/gallery-image.html'
    }
}),

myApp.directive('contentSidecolumn', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/content-sidecolumn.html'
    }
}),

myApp.directive('addPost', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/add-post.html'
    }
})
