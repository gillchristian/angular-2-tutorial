import {Component,  OnInit}  from 'angular2/core';
import {Hero, HeroService}   from '../services/hero.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  templateUrl: 'app/templates/hero-detail.template.html',
})
export class HeroDetailComponent implements OnInit  {
  public hero: Hero;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:HeroService){}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getHero(id).then(hero => this.hero = hero);
  }

  gotoHeroes() {
    // <a [routerLink]="['Heroes']">Heroes</a>
    this._router.navigate(['Heroes']);
  }
}
