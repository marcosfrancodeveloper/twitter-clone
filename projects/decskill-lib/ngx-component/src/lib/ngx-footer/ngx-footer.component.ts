import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-footer',
  templateUrl: './ngx-footer.component.html',
  styleUrls: ['./ngx-footer.component.scss']
})
export class NgxFooterComponent implements OnInit {

  public now!: number;

  constructor() { }

  ngOnInit(): void {
    this.now = new Date().getFullYear();
  }

}
