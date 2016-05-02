
import {Injectable} from 'angular2/core';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class CrisisService {
  getCrises() { return crisesPromise; }

  getCrisis(id: number | string) {
    return crisesPromise
      .then(crises => crises.filter(c => c.id === +id)[0]);
  }


  static nextCrisisId = 100;

  addCrisis(name:string) {
    name = name.trim();
    if (name){
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }
}

var crises = [
  new Crisis(1, 'Princess Held Captive'),
  new Crisis(2, 'Dragon Burning Cities'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Release Deadline Looms'),
  new Crisis(5, 'Attack the capital'),
  new Crisis(6, 'Lorem ipsum dolor'),
  new Crisis(7, 'Sarasenio sarasa sasa'),
  new Crisis(8, 'Yo le pare el taxi'),
  new Crisis(9, 'Que diferencia la musica'),
  new Crisis(10, 'Ahora tenemos bajo jojo'),
  new Crisis(11, 'Turn away `cuz I need you more'),
  new Crisis(12, 'But I gotta let it go')
];

var crisesPromise = Promise.resolve(crises);
