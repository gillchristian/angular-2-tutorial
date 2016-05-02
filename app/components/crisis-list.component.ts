import {Component, OnInit} from 'angular2/core';
import {Crisis, CrisisService} from '../services/crisis.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  templateUrl:'app/templates/crisis-list.template.html',
})
export class CrisisListComponent implements OnInit {
  public crises: Crisis[];
  private _selectedId: number;

  constructor(
    private _service: CrisisService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  ngOnInit() {
    this._service.getCrises().then(crises => this.crises = crises);
  }

  isSelected(crisis: Crisis) { return crisis.id === this._selectedId; }

  onSelect(crisis: Crisis) {
    this._router.navigate( ['CrisisDetail', { id: crisis.id }]  );
  }
}
