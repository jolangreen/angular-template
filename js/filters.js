'use strict';

/////////////////////
// Add Poop Filter //
/////////////////////
/**
 * All filters receive a string and parameter and returns
 * the modified string. In this filter we are checking if
 * the content of the string is 'Vanessa' if true we will
 * apply the word 'Poop' at the end of the string using +=
 */
myApp.filter('addPoop', function(){
    return function(string) {
        if (string === 'Vanessa') {
            string += ' Poop';
        }
        return string;
    };
});
