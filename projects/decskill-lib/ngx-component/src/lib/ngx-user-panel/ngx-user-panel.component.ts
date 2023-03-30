import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IProfile } from '@decskill-lib/ngx-domain';
import { Observable, Subscription } from 'rxjs';
import { NgxUserPanelService } from './ngx-user-panel.service';

export interface IUserPanel {
  isOpen: boolean;
}

@Component({
  selector: 'lib-ngx-user-panel',
  templateUrl: './ngx-user-panel.component.html',
  styleUrls: ['./ngx-user-panel.component.scss']
})
export class NgxUserPanelComponent implements OnInit, OnDestroy {
  public loading = false;
  public isOpen = false;
  private destroy$!: Subscription;
  @Input() profile!: IProfile;
  @ViewChild('userpanel', {static: false}) userpanel!: ElementRef;

  private painel$: Observable<IUserPanel> = this._service.painel$;

  /**
   * CONSTRUCTOR
   * @param _service: NgxUserPanelService
   */
  constructor(
    private _service: NgxUserPanelService,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loading = false;

    this.painel$.subscribe((panel: IUserPanel) => {
      this.prepare(panel.isOpen);
      this.loading = true;
    });
  }

  onClose() {
    this._renderer.removeClass(this.userpanel.nativeElement, 'show');
    this.isOpen = false;
  }

  logoff(): void {
    console.log('log off');
  }

  private prepare(isOpen: boolean): void {
    if (!isOpen) {
      this._renderer.removeClass(this.userpanel.nativeElement, 'show');
      this.isOpen = false;
    } else {
      this._renderer.addClass(this.userpanel.nativeElement, 'show');
      this.isOpen = true;
    }

    this.loading = true;
  }

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.unsubscribe();
    }
  }
}
