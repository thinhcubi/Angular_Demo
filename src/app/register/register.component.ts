import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../iuser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: IUser[] = []
  user = {
    email: "",
    password: "",
    country: "",
    age: "",
    gender: "",
    phone: "",
  }
  formCreate?: FormGroup
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      email : ['',[Validators.email]],
      password : ['',[Validators.minLength(6)]],
      confirmPassword : [''],
      age: ['',[Validators.min(18)]],
      phone: ['',[Validators.pattern('[0-9]{10}')]]
    })
  }
  submitForm(){

  }
  get email(){
    return this.formCreate?.get('email');
  }
  get password(){
    return this.formCreate?.get('password')
  }
  get age(){
    return this.formCreate?.get('age')
  }
  get phone(){
    return this.formCreate?.get('phone')
  }
}
