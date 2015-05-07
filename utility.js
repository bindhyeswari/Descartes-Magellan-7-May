/* Angular module for utilities */

angular.module('utility', []).directive('local', function () {

    // This directive, when applied onto an input element, will store the data
    // in localStorage and retrieve it when the page is loaded again

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // get the attribute name and search for that in the localStorage object
            element[0].value = localStorage.getItem(attrs.name) || '';

            // write an event listener to store the value of the input element based on
            // change events
            element[0].addEventListener('change', function () {
                localStorage.setItem(attrs.name, this.value);
            });
        }
    };

});

