import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '@decskill-lib/ngx-domain';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format
} from 'date-fns';
import { timer } from 'rxjs';

const counter = timer(0, 1000);

@Component({
  selector: 'lib-ngx-post',
  templateUrl: './ngx-post.component.html',
  styleUrls: ['./ngx-post.component.scss']
})
export class NgxPostComponent implements OnInit {
  @Input() post!: IPost;
  @Output() removeTweet = new EventEmitter<number>();
  publishedTime!: string;

  /**
   * CONSTRUCTOR
   */
  constructor() { }

  ngOnInit(): void {
    counter.subscribe(() => this.time());
  }

  remove(): void {
    if (this.post) {
      this.removeTweet.emit(this.post.id);
    }
  }

  private time(): void {
    let now = new Date();

    if (differenceInSeconds(now, new Date(this.post.date)) < 60) {
      this.publishedTime = differenceInSeconds(now, new Date(this.post.date)) + 's';
    } else if (differenceInMinutes(now, new Date(this.post.date)) < 60) {
      this.publishedTime = differenceInMinutes(now, new Date(this.post.date)) + 'm';
    } else if (differenceInHours(now, new Date(this.post.date)) < 24) {
      this.publishedTime = differenceInHours(now, new Date(this.post.date)) + 'h';
    } else {
      this.publishedTime = format(new Date(this.post.date), 'MMM d');
    }
  }
}
