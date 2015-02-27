(function() {
    angular.module('tiy-catalog', [])
        .controller('MainController', ['$http',
            function($http) {
            	/* API call for etsy trending 25 items */
                var API = {
                    'url': 'https://openapi.etsy.com/v2/listings/',
                    'category': 'trending',
                    'jsonp': '.js?callback=JSON_CALLBACK',
                    'apiKey': 'q4ubii6kukovuc0hl2e8myxx',
                    'fields': 'title,description,price,currency_code',
                    'mainImage': '&includes=MainImage'
                };
                var apiTemplate = _.template('${url}${category}${jsonp}&api_key=${apiKey}&fields=${fields}${mainImage}');
                var self = this
                $http.jsonp(apiTemplate(API))
                    .success(function(data) {
                        self.results = data.results;
                        self.listing_id = _.map(data.results, "listing_id")
                        self.title = _.map(data.results, "title")
                    })
            }
        ]);
})();