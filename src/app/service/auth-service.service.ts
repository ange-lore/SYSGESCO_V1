import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiServiceUrl = environment.apiBaseUrl;
  headers = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin' : 'http://localhost:8080',
    // 'Access-Control-Allow-Methods' : 'GET, POST, PUT'
    // 'Access-Control-Allow-Credentials' : 'true',
    // 'Access-Control-Allow-Origin': '*',
  })

  constructor(private http: HttpClient) { }

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  currentUser= {};

  public login(email : string, password : string){
    return this.http.post<any>(`${this.apiServiceUrl}/login`, {
      email,
      password
    },{headers : this.headers}).pipe(
      tap((res:any) =>{
        localStorage.setItem('access_token', res.jwt);
        this._isLoggedIn$.next(true);
      })
    )
  }

  public register(userName : String, userPrenom : String , userEmail: String, password: String): Observable<User>{
    return this.http.post<any>(`${this.apiServiceUrl}/api/users/save`, {
        userName,
        userPrenom,
        userEmail,
        password
      }
    ).pipe(
      tap((res : any) =>{
        console.log("Resigstraion Successfully", res );
      })
    )
  }


  public getAllUsers():Observable<User[]>{
    return this.http.get<any>(`${this.apiServiceUrl}/api/users`);
  }

  public deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/delete/${id}`);
  }

  public getUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/delete/${id}`);
  }
  public updateUser(user :User):Observable<User>{
    return this.http.put<User>(`${this.apiServiceUrl}/users/update`, user);

  }







  handleError(error: HttpErrorResponse) {
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    }else{
      msg =  `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

