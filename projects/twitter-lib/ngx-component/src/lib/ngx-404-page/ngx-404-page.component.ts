import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'lib-ngx-404-page',
  templateUrl: './ngx-404-page.component.html',
  styleUrls: ['./ngx-404-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ngx404PageComponent {
  message = 'Você não pode entrar nesta página...';

  /**
   * CONSTRUCTOR
   * @param _location: Location
   */
  constructor(
    private _location: Location
  ) { }

  navigate(): void {
    this._location.back();
  }
}
