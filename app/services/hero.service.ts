import {Injectable} from 'angular2/core';

export class Hero {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class HeroService {
  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}

var HEROES = [
	new Hero(11, 'Mr. Nice'),
	new Hero(12, 'Narco'),
	new Hero(13, 'Bombasto'),
	new Hero(14, 'Celeritas'),
	new Hero(15, 'Magneta'),
	new Hero(16, 'RubberMan'),
	new Hero(17, 'Chuchita'),
	new Hero(18, 'Poseidon'),
	new Hero(19, 'Arrow'),
	new Hero(20, 'Pitbull'),
	new Hero(21, 'David Getta'),
	new Hero(22, 'Sarasenio'),
	new Hero(23, 'Si sapees'),
];

var heroesPromise = Promise.resolve(HEROES);
