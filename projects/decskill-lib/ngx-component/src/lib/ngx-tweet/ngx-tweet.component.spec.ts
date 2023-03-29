import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxTweetComponent } from './ngx-tweet.component';

describe('NgxTweetComponent', () => {
  let component: NgxTweetComponent;
  let fixture: ComponentFixture<NgxTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
