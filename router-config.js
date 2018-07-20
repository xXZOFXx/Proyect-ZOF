app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/problema", {
        templateUrl : "problema.htm"
    })
    .when("/Objetivo", {
        templateUrl : "obv.htm"
    })
    .when("/Distros", {
        templateUrl : "dist.htm"
    });
});
