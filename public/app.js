import * as angular from "angular2/angular2"

function AppComponent() {}
AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
    template: '<h1>My first Angular 2 App</h1>'
  })
];
angular.bootstrap(AppComponent);
