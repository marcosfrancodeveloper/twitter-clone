import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbService } from '@decskill-lib/ngx-component';
import { IProfile } from '@decskill-lib/ngx-domain';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../shared/store/app.state';
import { getProfile } from '../../../shared/store/profile/profile.selectors';
import * as fromProfilesAction from '../../../shared/store/profile/profile.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile$: Observable<IProfile | null> = this._store.select(getProfile);
  profile!: IProfile;

  /**
   * CONSTRUCTOR
   * @param _breadcrumbService: NgxBreadcrumbService
   * @param _store: Store<AppState>
   */
  constructor(
    private _breadcrumbService: NgxBreadcrumbService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._breadcrumbService.add('dashboard-breadcrumb', 'Dashboard', '/dashboard', 1);
    this._store.dispatch(fromProfilesAction.ByProfile({ path: 1 }));
    this.profile$.subscribe((profile: IProfile | null) => {
      if (profile) {
        this.profile = profile;
      }
    });
  }
}
