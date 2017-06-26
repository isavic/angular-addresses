import { Component } from '@angular/core';

@Component({
	selector: 'navbar',
	templateUrl: 'app/templates/nav.template.html'
})
export class NavComponent {
	public isCollapsed: boolean = true;
}