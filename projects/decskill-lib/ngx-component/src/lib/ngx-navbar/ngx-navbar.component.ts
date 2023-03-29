import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '@decskill-lib/ngx-domain';
import { NgxUserPanelService } from '../ngx-user-panel/ngx-user-panel.service';

@Component({
  selector: 'lib-ngx-navbar',
  templateUrl: './ngx-navbar.component.html',
  styleUrls: ['./ngx-navbar.component.scss']
})
export class NgxNavbarComponent {
  @Input('profile') profile!: IProfile;

  /**
   * CONSTRUCTOR
   * @param _userPanel: NgxUserPanelService
   */
  constructor(
    private _userPanel: NgxUserPanelService
  ) { }

  openUserPanel(): void {
    this._userPanel.openOrClose(true);
  }
}
