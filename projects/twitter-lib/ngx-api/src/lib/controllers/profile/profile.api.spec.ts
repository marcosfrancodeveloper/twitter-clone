import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProfileAPI } from './profile.api';

describe('ProfileAPI', () => {
  let profileAPI: ProfileAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileAPI],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    profileAPI = TestBed.inject(ProfileAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(profileAPI).toBeTruthy();
  });
});
