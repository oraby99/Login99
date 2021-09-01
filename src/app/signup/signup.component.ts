import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
declare var $:any
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'gray','border-color':'gray'}
  isClicked=false
  ResponseMessage=""
  isUniuqeEmailMessage=""
  isUniuqeEmail=false
  isSuccess=false
  constructor(private _AuthService:AuthService) { }
  signUp=new FormGroup({
    first_name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    last_name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    age:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)])
   })

   FormData()
   {
     this.isClicked=true
    if(this.signUp.valid)
    {
        this._AuthService.signUp(this.signUp.value).subscribe(response=>{
        if(response.message=="success")
        {
          this.isClicked=false
          this.isSuccess=true
          this.isUniuqeEmail=false
          this.ResponseMessage=response.message
          this.signUp.reset()
        }else 
        {
          this.isUniuqeEmailMessage=response.errors.email.message
          this.isUniuqeEmail=true
          this.isSuccess=false
          this.isClicked=false
        }
        console.log(response)
      })
    }
   }
  ngOnInit(): void
   {
    $('#signup').particleground();
   }
}
