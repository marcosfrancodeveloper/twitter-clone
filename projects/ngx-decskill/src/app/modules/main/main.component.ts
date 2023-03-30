import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxAsideService } from '@decskill-lib/ngx-component';
import { IProfile } from '@decskill-lib/ngx-domain';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routes } from './routes';
import { AppState } from '../../shared/store/app.state';
import { getProfile } from '../../shared/store/profile/profile.selectors';
import * as fromProfilesAction from '../../shared/store/profile/profile.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'DecSkill';
  routes!: Route[];
  profile$: Observable<IProfile | null> = this._store.select(getProfile);
  profile!: IProfile;

  /**
   * CONSTRUCTOR
   * @param _router: Router
   * @param _aside: NgxAsideService
   * @param _store: Store<AppState>
   */
  constructor(
    private _router: Router,
    private _aside: NgxAsideService,
    private _store: Store<AppState>
  ) {
    this.routes = routes;
    this.prepare();
  }

  async ngOnInit(): Promise<void> {
    this._router.initialNavigation();
    this._store.dispatch(fromProfilesAction.ByProfile({ path: 1 }));
    this.profile$.subscribe((profile: IProfile | null) => {
      if (profile) {
        this.profile = profile;
      }
    });
  }

  private prepare(): void {
    let count = 0;
    this.routes
      .filter((route: Route) => route.path !== '' && !route.path?.includes('**'))
      .map((route: Route) => {
        let path = route.path?.replace('/', '');
        this._aside.add(`${path}-${++count}`, this.capitalize(path), route.path, this.iconToRoute(path), count);
      });
  }

  private capitalize(value?: string): string {
    let arr = value?.split(' ') || [];
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }

  private iconToRoute(route?: string): string {
    switch(route) {
      case 'home':
        return 'home';
      default:
        return '';
    }
  }
}
