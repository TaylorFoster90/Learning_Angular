(function() {
    var tiyCatalog = angular.module('tiy-catalog', ['ngRoute'])
    tiyCatalog.config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateURL : '/pages/main.html',
            controller : 'MainController'
        })
        .when('/long',{
            templateURL: '/pages/long.html',
            controller: 'AlternateController'
        })
        });

        tiyCatalog.controller('MainController', ['$http',
            function($http) {
                /* API call for etsy trending 25 items */
                function mapData(data) {
                    return _.map(data, function(object) {
                        return {
                            title: object.title,
                            description: object.description,
                            price: object.price,
                            images: {
                                full: object.MainImage.url_fullxfull,
                                small: object.MainImage.url_170x135
                            }
                        }
                    })
                }
                var API = {
                    'url': 'https://openapi.etsy.com/v2/listings/',
                    'category': 'trending',
                    'jsonp': '.js?callback=JSON_CALLBACK',
                    'pagination': 'limit=100&offset=0',
                    'apiKey': 'q4ubii6kukovuc0hl2e8myxx',
                    'fields': 'title,description,price',
                    'mainImage': '&includes=MainImage'
                };
                var apiTemplate = _.template('${url}${category}${jsonp}&${pagination}&api_key=${apiKey}&fields=${fields}${mainImage}');
                console.log(apiTemplate(API))



                var self = this
                $http.jsonp(apiTemplate(API))
                
                    .success(function(data) {
                            self.trending = mapData(data.results);

                            self.show = function(thing){
                                self.thing =! self.thing;
                            }

                        }

                )
            }
        ]);
        tiyCatalog.controller('AlternateController', function($scope){
            $scope.message = 'first view motherfuckers!!!';
        })
})();