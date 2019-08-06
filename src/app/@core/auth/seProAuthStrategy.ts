import {NbAuthResult, NbAuthStrategyClass, NbOAuth2AuthStrategy} from '@nebular/auth';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {
  SeProAuthStrategyOptions,
  seProAuthStrategyOptions1} from './SeProAuthStrategyOptions';

@Injectable()
export class SeProAuthStrategy extends NbOAuth2AuthStrategy {
  protected defaultOptions: SeProAuthStrategyOptions = seProAuthStrategyOptions1;

  static setup(options: SeProAuthStrategyOptions): [NbAuthStrategyClass, SeProAuthStrategyOptions] {
    return [SeProAuthStrategy, options];
  }

  logout(): Observable<NbAuthResult> {
    return undefined;
  }
  register(data?: any): Observable<NbAuthResult> {
    const module = 'register';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(data.toString());
    return this.http.request('post', 'http://localhost:8074/registration', {body: data, observe: 'response'})
      .pipe(
        map((res) => {
          if (this.getOption(`${module}.alwaysFail`)) {
            throw this.createFailResponse(data);
          }

          return res;

        }),
        map((res) => {
          return new NbAuthResult(
            true,
            res,
            this.getOption(`${module}.redirect.success`),
            [],

            this.getOption('messages.getter')('register', res, this.options));
        }),
        catchError((res) => {
          return this.handleResponseError(res);
        }),
      );
  }
}
