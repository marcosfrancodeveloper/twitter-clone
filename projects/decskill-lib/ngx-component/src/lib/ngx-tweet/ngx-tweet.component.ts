import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfile, Post } from '@decskill-lib/ngx-domain';

@Component({
  selector: 'lib-ngx-tweet',
  templateUrl: './ngx-tweet.component.html',
  styleUrls: ['./ngx-tweet.component.scss']
})
export class NgxTweetComponent {
  maxlength: number = 130;
  @Input() profile!: IProfile;
  @Output() tweet = new EventEmitter<Post>();

  form: FormGroup = this._formBuilder.group({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.maxlength)
    ]),
  });

  /**
   * CONSTRUCTOR
   * @param _formBuilder: FormBuilder
   */
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  submit() {
    if (this.form.valid) {
      this.tweet.emit(this.form.value);
      this.form.get('title')?.setValue('');
    }
  }
}
