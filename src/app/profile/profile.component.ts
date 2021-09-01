import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _Router:Router) 
  {
    if( !localStorage.getItem('TOKEN'))
    {
      this._Router.navigate(['/signin'])
    }
  }

  ngOnInit(): void {
  }

}
