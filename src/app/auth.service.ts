import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL="https://routeegypt.herokuapp.com/"
  constructor(private _HttpClient:HttpClient) { }
  signUp(data: any): Observable<any>
  {
    return this._HttpClient.post(this.baseURL+'signup',data)
  }
  signIn(data: any):Observable<any>
  {

  return  this._HttpClient.post(this.baseURL+'signin',data)
  }
  signOut(data: any):Observable<any>
  {

   return this._HttpClient.post(this.baseURL+'signOut',data)
  }
  isLoggedIn()
  {
  return !!localStorage.getItem('TOKEN')
  }
}
