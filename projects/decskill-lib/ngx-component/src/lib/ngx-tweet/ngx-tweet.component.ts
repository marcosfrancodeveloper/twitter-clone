import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfile } from '@decskill-lib/ngx-domain';

@Component({
  selector: 'lib-ngx-tweet',
  templateUrl: './ngx-tweet.component.html',
  styleUrls: ['./ngx-tweet.component.scss']
})
export class NgxTweetComponent {
  maxlength: number = 130;
  @Input('profile') profile!: IProfile;
  // @Output()

  form: FormGroup = this._formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.maxLength(this.maxlength)]),
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
      console.log(this.form.value);
    }
  }
}
