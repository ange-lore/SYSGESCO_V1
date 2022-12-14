import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private auth: AuthServiceService, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required, Validators.minLength(4)],
      prenom: ['', Validators.required, Validators.minLength(4)],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  save(){
    this.submitted = true;

    if (
      this.registerForm.invalid || !this.registerForm.getRawValue().email.invalid){
      alert('veillez bien remplir les champs')
    }else{
      alert('OK')

    }
    // else{
    //   this.auth.register(
    //     this.registerForm.getRawValue().nom,
    //     this.registerForm.getRawValue().prenom,
    //     this.registerForm.getRawValue().email,
    //     this.registerForm.getRawValue().mdp
    //   )
    //     .subscribe(res =>{
    //       alert("User Successfully Register. ");
    //       this.router.navigate(['/login'])
    //     },error =>{
    //       console.log("error");
    //     });
    // }
  }
}
