// // src/app/login/login.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   isSubmitted = false;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   // Getter for easy access to form fields
//   get formControls() {
//     return this.loginForm.controls;
//   }

//   onSubmit(): void {
//     this.isSubmitted = true;

//     if (this.loginForm.invalid) {
//       return;
//     }

//     // On a successful submission, you would typically send the form data to a server
//     console.log('Login successful!', this.loginForm.value);
//     alert('Login successful!');
//   }
// }