import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {Router} from '@angular/router';
import {Appointment} from './appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  token: string;

  constructor(
    protected http: HttpClient,
    private authService: NbAuthService,
    private router: Router) { }

  getappointments() {
    const Url = 'http://localhost:8071/api/appointment/all';
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.get<Appointment[]>(Url, {headers: header});
  }
  private myGetToken(): void {
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.token = token.getPayload().access_token;
        }
      });
  }
  protected buildAuthHeader(): any {
    this.myGetToken();
    if (this.authService.isAuthenticated()) {
      return new HttpHeaders(
        {
          'Content-Type' : 'application/json',
          'Authorization': 'bearer ' + this.token,
        },
      );
    } else {
      this.router.navigate(['auth/login']);
    }
  }
}
