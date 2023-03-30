import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbService } from '@decskill-lib/ngx-component';
import { IPost, IProfile } from '@decskill-lib/ngx-domain';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../shared/store/app.state';
import { getProfile } from '../../../shared/store/profile/profile.selectors';
import { getPosts } from '../../../shared/store/post/post.selectors';
import * as fromPostsAction from '../../../shared/store/post/post.actions';
import { PostQueryParams } from '@decskill-lib/ngx-api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile$: Observable<IProfile | null> = this._store.select(getProfile);
  posts$: Observable<IPost[]> = this._store.select(getPosts);
  page = 1;
  limit = 5;

  /**
   * CONSTRUCTOR
   * @param _breadcrumbService: NgxBreadcrumbService
   * @param _store: Store<AppState>
   */
  constructor(
    private _breadcrumbService: NgxBreadcrumbService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._breadcrumbService.add('home-breadcrumb', 'Home', '/home', 1);
    this.loadPosts();
  }

  private queryParams(): PostQueryParams {
    const params = new PostQueryParams();
    params.addExpandables(['profile']);
    params.setPagination(this.page, this.limit);
    params.addOrder('date');
    return params;
  }

  private loadPosts(): void {
    this._store.dispatch(fromPostsAction.LoadPosts({ params: this.queryParams() }));
  }

  onScroll(): void {
    this.page += 1;
    this._store.dispatch(fromPostsAction.LoadPaginablePosts({ params: this.queryParams() }));
  }

  async tweet(post: IPost): Promise<void> {
    await this.profile$.subscribe((item: IProfile | null) => {
      if (item) {
        post.date = new Date();
        post.profileId = item.id;
      }
    });
    this._store.dispatch(fromPostsAction.CreatePost({ payload: post }));
    this.loadPosts();
  }

  removeTweet(postId: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remova!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._store.dispatch(fromPostsAction.DeletePost({ payload: postId }));
        this.loadPosts();
      }
    });
  }
}
