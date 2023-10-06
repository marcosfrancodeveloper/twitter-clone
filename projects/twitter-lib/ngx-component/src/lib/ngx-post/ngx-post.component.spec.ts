import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPostComponent } from './ngx-post.component';

describe('NgxPostComponent', () => {
  let component: NgxPostComponent;
  let fixture: ComponentFixture<NgxPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
