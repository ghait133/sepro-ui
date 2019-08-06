import {
  NbAuthResult,
  NbAuthService,

  NbRegisterComponent
} from '@nebular/auth';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class Register extends NbAuthService {

register(strategyName: string, data?: any): Observable<NbAuthResult> {
  console.log('register')
  return undefined;
}
}
