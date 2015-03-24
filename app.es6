import {Component, Template, bootstrap, If} from 'angular2/angular2';

@Component({
	selector: 'my-app'
})

@Template({
	url: 'name-change.html',
	directives: [
		If
/*
	Note : si name change a besoin d'inclure un autre template,
	il faut l'ajouter en tant que directive
	exemple : https://github.com/djsmith42/angular2_calendar/blob/master/app/components/calendar/calendar.js
*/
	]
})

// Component controller
class MyAppComponent {
	todos;
	name;
	isLoaded;
	constructor() {
		this.name = 'Alice';
		this.todos = [ 'item1', 'item2' ];
		this.isLoaded = false;
	}
	load() {
		this.isLoaded = true;
	}
	changeName( newName ){
		this.name = newName;
	}
}

export function main() {
  bootstrap(MyAppComponent);
}

// bootstrap(MyAppComponent);