import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NgxFormFieldComponent } from './ngx-form-field.component';
import { NgxFormFieldModule } from './ngx-form-field.module';

@Component({
  selector: 'ngx-test-dialog-stepper',
  template: `
    <form [formGroup]="createForm">
      <ngx-form-field
        #formFieldName
        class="form-field-name"
        labelContent="Email"
        for="email"
        required="true"
        tooltip="Email field"
        [validatorMessages]="[
          { validator: 'email', message: 'email' },
          { validator: 'required', message: 'required' }
        ]"
      >
        <input type="text" formControlName="email" id="email" class="form-control" />
      </ngx-form-field>
      <ngx-form-field
        #formFieldControl
        labelContent="Name"
        for="name"
        required="false"
        [validatorMessages]="[{ validator: 'required', message: 'required' }]"
      >
        <input type="text" [formControl]="createForm.get('name')" id="name" class="form-control" />
      </ngx-form-field>
      <ngx-form-field
        #formFieldWithoutControl
        for="noForm"
        required="true"
        tooltip="teste"
        class="form-field-no-label"
        [validatorMessages]="[{ validator: 'required', message: 'required' }]"
      >
        <input type="text" id="noForm" class="form-control" />
      </ngx-form-field>
    </form>
  `,
})
export class TestFormFieldComponent {
  @ViewChild('formFieldName') formFieldName: NgxFormFieldComponent;
  @ViewChild('formFieldControl') formFieldControl: NgxFormFieldComponent;
  @ViewChild('formFieldWithoutControl')
  formFieldWithoutControl: NgxFormFieldComponent;

  createForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
  });
  constructor(private fb: UntypedFormBuilder) {}
}

describe('FormFieldComponent', () => {
  let parentComponent: TestFormFieldComponent;
  let fixture: ComponentFixture<TestFormFieldComponent>;
  let componentName: NgxFormFieldComponent;
  let componentControl: NgxFormFieldComponent;
  let componentWithoutControl: NgxFormFieldComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, ReactiveFormsModule, NgxFormFieldModule],
        declarations: [TestFormFieldComponent],
        teardown: { destroyAfterEach: false },
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(TestFormFieldComponent);
          parentComponent = fixture.componentInstance;
          fixture.detectChanges();
          componentName = parentComponent.formFieldName;
          componentControl = parentComponent.formFieldControl;
          componentWithoutControl = parentComponent.formFieldWithoutControl;
          fixture.detectChanges();
        });
    })
  );

  it('should create component with formControlname', () => {
    expect(componentName).toBeTruthy();
    expect(componentName.control).toBeTruthy();
  });
  it('should create component with formControl', () => {
    expect(componentControl).toBeTruthy();
    expect(componentControl.control).toBeTruthy();
  });
  it('should create component without formControl/formControlname', () => {
    expect(componentWithoutControl).toBeTruthy();
    expect(componentWithoutControl.control).toBeFalsy();
  });
  it('should have form-group class', () => {
    const element = fixture.debugElement.query(By.css('.ngx-form-field > div.form-group'));
    expect(element).toBeTruthy();
  });

  it('should have has-error class when formControl is invalid', () => {
    componentName.control.setValue('marcelo');
    componentName.control.markAsTouched();
    componentName.control.updateValueAndValidity();
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.ngx-form-field > div.has-error'));
    expect(element).toBeTruthy();
  });
  it('should have error messages when formControl is invalid', () => {
    componentName.control.markAsTouched();
    componentName.control.updateValueAndValidity();
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.form-field-name .help-block'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent.trim()).toEqual('required');
    componentName.control.setValue('teste');
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('.form-field-name .help-block'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent.trim()).toEqual('email');
  });
  it('should NOT have error messages when formControl is valid', () => {
    componentName.control.setValue('teste@teste.com');
    componentName.control.markAsTouched();
    componentName.control.updateValueAndValidity();
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.form-field-name .help-block'));
    expect(element).toBeFalsy();
  });
  describe('When labelContent is defined', () => {
    it('should render label', () => {
      const element = fixture.debugElement.query(By.css('.form-field-name label'));
      expect(element).toBeTruthy();
      expect(element.attributes.class).toEqual('control-label');
      expect(element.nativeElement.textContent).toContain('Email');
    });
    it('Should render * if "required" is true', () => {
      const element = fixture.debugElement.query(By.css('.form-field-name small'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toEqual('*');
    });
    it('Should NOT render * if "required" is false', () => {
      componentName.required = false;
      fixture.detectChanges();
      const element = fixture.debugElement.query(By.css('.form-field-name small'));
      expect(element).toBeFalsy();
    });
    it('Should have for attribute if "for" is defined', () => {
      const element = fixture.debugElement.query(By.css('.form-field-name label'));
      expect(element).toBeTruthy();
      expect(element.properties.htmlFor).toEqual('email');
    });
    it('Should NOT have for attribute if "for" is undefined', () => {
      componentName.for = undefined;
      fixture.detectChanges();
      const element = fixture.debugElement.query(By.css('.form-field-name label'));
      expect(element).toBeTruthy();
    });
    it('Should render tooltip icon if "tooltip" is defined', () => {
      const element = fixture.debugElement.query(By.css('.form-field-name em'));
      expect(element).toBeTruthy();
      expect(element.attributes.class).toEqual('flaticon flaticon-info icon-sm fs-xs-margin-left');
      expect(element.properties.title).toEqual('Email field');
    });
    it('Should NOT render tooltip icon if "tooltip" is undefined', () => {
      componentName.tooltip = undefined;
      fixture.detectChanges();
      const element = fixture.debugElement.query(By.css('.form-field-name em'));
      expect(element).toBeFalsy();
    });
  });
  describe('When labelContent is undefined', () => {
    it('should NOT render label', () => {
      const element = fixture.debugElement.query(By.css('.form-field-no-label label'));
      expect(element).toBeFalsy();
    });
    it('Should NOT render *', () => {
      const element = fixture.debugElement.query(By.css('.form-field-no-label small'));
      expect(element).toBeFalsy();
    });
    it('Should NOT have for attribute', () => {
      const element = fixture.debugElement.query(By.css('.form-field-no-label label'));
      expect(element).toBeFalsy();
    });
    it('Should NOT render tooltip icon', () => {
      const element = fixture.debugElement.query(By.css('.form-field-no-label em'));
      expect(element).toBeFalsy();
    });
  });
});
