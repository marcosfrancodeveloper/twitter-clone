import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './ngx-alert.service';
import { IAlertMessage } from '@decskill-lib/ngx-domain';

@Component({
  selector: 'lib-ngx-alert',
  templateUrl: './ngx-alert.component.html',
  styleUrls: ['./ngx-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAlertComponent {

  private subscription!: Subscription;
  message: any;

  /**
   * CONSTRUCTOR
   * @param _alert: AlertService
   */
  constructor(
    private _alert: AlertService
  ) { }

  ngOnInit() {
    this.subscription = this._alert.getAlert()
      .subscribe((message: IAlertMessage) => {
        switch (message && message.type) {
          case 'success':
            message.classes = 'alert alert-success';
            break;
          case 'error':
            message.classes = 'alert alert-danger';
            break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
