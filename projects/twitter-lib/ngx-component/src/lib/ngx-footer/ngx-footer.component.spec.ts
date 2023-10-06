import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFooterComponent } from './ngx-footer.component';

describe('NgxFooterComponent', () => {
  let component: NgxFooterComponent;
  let fixture: ComponentFixture<NgxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
