import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { AuthService } from '../auth.service';
declare var $:any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'gray','border-color':'gray'}
  constructor(private _AuthService:AuthService,private _Router:Router) { }
    signIn=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)])
   })
   FormData()
   {

    if(this.signIn.valid)
    {
    this._AuthService.signIn(this.signIn.value).subscribe(res=>{
       if(res.message=="success")
       {
         this._Router.navigate(['/profile'])
         localStorage.setItem("TOKEN",res.token)
       }
    })
    }
   }
  ngOnInit(): void
   {
    $('#signin').particleground();
    $('.hmbozo').select2();
    JsBarcode("#barcode", "12345" ,{
      lineColor: "black",
      width: 6,
      height: 80,
      displayValue: false
    });
   }

}
