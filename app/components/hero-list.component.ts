// TODO SOMEDAY: Feature Componetized like HeroCenter
import {Component, OnInit}   from 'angular2/core';
import {Hero, HeroService}   from '../services/hero.service';
import {Router}              from 'angular2/router';

@Component({
  templateUrl: 'app/templates/hero-list.template.html'
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(
    private _router: Router,
    private _service: HeroService) { }

  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }
  onSelect(hero: Hero) {
    this._router.navigate( ['HeroDetail', { id: hero.id }] );
  }
}

/* A link parameters array
['HeroDetail', { id: hero.id }] // {id: 15}
*/