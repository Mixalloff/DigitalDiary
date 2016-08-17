(function() {
    'use strict';
    angular
        .module('app.directives')
        .directive('popupImage', function() {
             return {
                restrict: 'A',
                compile: compile,
                controller: 'PopupImageController',
                controllerAs: 'popup'
            };
        });

        function compile(templateElem, templateAttrs) {
            
            return {
                pre: pre,
                post: post
            }
        }

        function pre(scope, elem, attrs) {
        }

        function post(scope, elem, attrs, controller) {
            elem.bind('click', function(e) {
                controller.openPopupImage(e, attrs.ngSrc, attrs.alt);
            });
        }
})();