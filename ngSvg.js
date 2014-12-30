'use strict';

function resolveTemplate(tElement, tAttrs) {
    if(!Modernizr.svg) {
        if(tAttrs.ie){
            return '<img src="img/' + tAttrs.useid + '_' + tAttrs.ie + '.png" />'
        } else {
            return '<img src="img/' + tAttrs.useid + '.png" />'
        }
    } else {
        return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlink:href=""/></svg>'
    }
}

angular.module('ngSvg', [])

    .directive('usesvg', [function(){
        return {
            restrict : 'E',
            replace:true,
            controller : ['$scope',  function($scope){

            }],
            scope: {
                useid:'@',
                ie:'@'
            },
            template: resolveTemplate,
            link:function(scope, svg, attrs){
                if(svg.prop('tagName') == 'svg'){
                    svg.attr('viewBox', document.getElementById(attrs.useid).getAttribute('viewBox'));
                    svg.children().attr('xlink:href', '#' + attrs.useid);
                }
            }
        };
    }])