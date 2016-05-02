
import {Component, OnInit} from 'angular2/core';
import {Crisis, CrisisService} from '../services/crisis.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../services/dialog.service';


@Component({
  templateUrl: 'app/templates/crisis-detail.template.html',
  styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {

  public crisis: Crisis;
  public editName: string;

  constructor(
    private _service: CrisisService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.getCrisis(id).then(crisis => {
      if (crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else { // id not found
        this.gotoCrises();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    // Allow navigation (`true`) if no crisis or the crisis is unchanged.
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves true-or-false when the user decides
    return !this.crisis ||
           this.crisis.name === this.editName ||
           this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    let route =
      ['CrisisList',  {id: this.crisis ? this.crisis.id : null} ]

    this._router.navigate(route);
  }
}
