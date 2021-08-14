import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8181/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(user: any): Observable<any> {
    console.log(AUTH_API + 'login ' + user.username + ' ' + user.password);
    return this.http.post(AUTH_API + 'login',
      {
        username: user.username,
        password: user.password
      });
  }

  public register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup',
      {
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        password: user.password,
        confirmPassword: user.confirmPassword
      });
  }
}
