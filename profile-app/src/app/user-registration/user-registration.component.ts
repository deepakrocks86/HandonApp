import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private registerSvc: RegisterService) {  }

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    street:  new FormControl(''),
    city:  new FormControl(''),
    state:  new FormControl(''),
    zipcode:  new FormControl(''),
  });


  submitApplication() {
    console.log(this.userForm);
    if (this.userForm.dirty && this.userForm.valid) {
      this.registerSvc.registerUser(this.userForm);
    }
  }
}
