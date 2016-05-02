import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}     from './app.component';
import {DialogService}    from './services/dialog.service';
import {HeroService}      from  './services/hero.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  DialogService,
  HeroService
]);