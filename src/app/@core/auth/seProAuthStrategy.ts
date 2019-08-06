import {NbAuthResult, NbAuthStrategyClass, NbOAuth2AuthStrategy, NbOAuth2AuthStrategyOptions} from "@nebular/auth";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {seProAuthStrategyOptions, seProAuthStrategyOptions1} from "./seProAuthStrategyOptions";

@Injectable()
export class seProAuthStrategy extends NbOAuth2AuthStrategy{
  protected defaultOptions: seProAuthStrategyOptions = seProAuthStrategyOptions1;

  static setup(options: seProAuthStrategyOptions): [NbAuthStrategyClass, seProAuthStrategyOptions]{
    return [seProAuthStrategy, options];
  }

  logout(): Observable<NbAuthResult> {
    return undefined;
  }
  register(data?: any): Observable<NbAuthResult> {
    const module = 'register';
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
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
          debugger;
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
