import { AfterContentInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { UntypedFormControl, FormControlDirective, FormControlName } from '@angular/forms';
import { NgxFormFieldValidatorMessage } from './ngx-form-field-validator-message.interface';

@Component({
  selector: 'ngx-form-field',
  templateUrl: './ngx-form-field.component.html',
  styleUrls: ['./ngx-form-field.component.scss'],
})
export class NgxFormFieldComponent implements AfterContentInit {
  @Input() labelContent!: string;
  @Input() for!: string;
  @Input() required = false;
  @Input() tooltip!: string;
  @Input() subtitle!: string;
  @Input() tooltipTemplate!: TemplateRef<any>;
  @Input() validatorMessages!: NgxFormFieldValidatorMessage[];
  @Input() characterCounterLimit: number = 0;

  @ContentChild(FormControlDirective) private formControlDirective!: FormControlDirective;
  @ContentChild(FormControlName) private formControlName!: FormControlName;

  control!: UntypedFormControl;

  ngAfterContentInit(): void {
    this.setFormFieldControl();
  }

  private setFormFieldControl(): void {
    if (this.formControlName) {
      this.control = this.formControlName.control;
    } else if (this.formControlDirective) {
      this.control = this.formControlDirective.control;
    }
  }

  public get controlHasValidationError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }
}
