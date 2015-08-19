import * as angular from "angular2/angular2"

function AppComponent() {}
AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
    template: `<h1>My first Angular 2 App</h1>
    	<form>
    	<input type='checkbox'/>find in directory<input type='text'/>
    	</form>
    `
  })
];
angular.bootstrap(AppComponent);
