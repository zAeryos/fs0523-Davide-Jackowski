import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  newUserForm!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.newUserForm = this.fb.group({
      name:         this.fb.control(null, [Validators.required]),
      surname:      this.fb.control(null, [Validators.required]),
      username:     this.fb.control(null, [Validators.required]),
      password:     this.fb.control(null, [Validators.required]),
      cPassword:    this.fb.control(null, [Validators.required]),
      gender:       this.fb.control('', [Validators.required]),
      profilePic:   this.fb.control(null),
      bio:          this.fb.control(null)
    })
  }

  isValid(fieldName: string) {
    return this.newUserForm.get(fieldName)?.valid;
  }

  isTouched(fieldName: string) {
    return this.newUserForm.get(fieldName)?.touched;
  }

  register() {
    console.log(this.newUserForm.value)
    this.newUserForm.reset()
  }
}
