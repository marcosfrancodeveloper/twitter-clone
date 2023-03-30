import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '@decskill-lib/ngx-domain';

@Component({
  selector: 'lib-ngx-post',
  templateUrl: './ngx-post.component.html',
  styleUrls: ['./ngx-post.component.scss']
})
export class NgxPostComponent {
  @Input() post!: IPost;
  @Output() removeTweet = new EventEmitter<number>();

  /**
   * CONSTRUCTOR
   */
  constructor() { }

  remove(): void {
    if (this.post) {
      this.removeTweet.emit(this.post.id);
    }
  }
}
