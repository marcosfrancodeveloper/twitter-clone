import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostAPI } from './post.api';

describe('PostAPI', () => {
  let postAPI: PostAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostAPI],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    postAPI = TestBed.inject(PostAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(postAPI).toBeTruthy();
  });
});
