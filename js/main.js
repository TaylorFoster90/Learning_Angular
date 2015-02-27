(function(){
    angular.module('tiy-catalog', [ ])
    .controller('MainController',[ '$http', function($http){
        var dad = this
        $http.jsonp('https://openapi.etsy.com/v2/listings/trending.js?callback=JSON_CALLBACK&api_key=q4ubii6kukovuc0hl2e8myxx')
        .success(function(data){
            dad.results = data.results;
            dad.listing_id = _.map(data.results, "listing_id")
            dad.description = _.map(data.results, "description")
        })
    } ]) 
; 
})();
