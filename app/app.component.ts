import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroListComponent} from './components/hero-list.component';
import {CrisisCenterComponent} from './components/crisis-center.component';

@Component({
  selector: 'my-app',
  templateUrl:'app/templates/app.template.html',
  directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
  { // Crisis Center child route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },
  
  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])

export class AppComponent { }