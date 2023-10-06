import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { IUserPanel } from './ngx-user-panel.component';

@Injectable({
  providedIn: 'root'
})
export class NgxUserPanelService {
  private painel = new ReplaySubject<IUserPanel>();
  readonly painel$: Observable<IUserPanel> = this.painel.asObservable();

  constructor() { }

  /**
   * Método responsável por abrir ou fechar o painel
   * @param value: boolean
   */
  openOrClose(value: boolean): void {
    const painel = {isOpen: value} as IUserPanel;
    this.painel.next(painel);
  }
}
