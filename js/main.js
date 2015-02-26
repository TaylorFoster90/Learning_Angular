(function(){
    angular.module('tiy-catalog', [ ])
    .controller('MainController',[ '$http', function($http){
        var self = this;
        $http.jsonp('https://openapi.etsy.com/v2/listings/trending.js?callback=JSON_CALLBACK&api_key=q4ubii6kukovuc0hl2e8myxx')
        .success(function(data){
            self.results = data.results;
        })
    } ]) 
; 
})();
