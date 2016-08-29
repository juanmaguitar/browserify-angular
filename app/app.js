var angular = require("angular");
var angularRoute = require("angular-route");

var controllersModule = require("./controllers");

angular.module("myApp",[ angularRoute, controllersModule ])
  .config( ($routeProvider) => {
    $routeProvider
        .when('/', {
          template: '<div><h1>{{ ctrl.result }}</h1></div>',
          controller: 'FirstCtrl',
          controllerAs: 'ctrl'
        })

  })