import {
  NbAuthOAuth2Token,
  NbAuthSimpleToken,
  NbOAuth2AuthStrategyOptions,
  NbPasswordAuthStrategyOptions,
  NbPasswordStrategyMessage,
  NbPasswordStrategyModule, NbPasswordStrategyToken
} from '@nebular/auth';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {getDeepFromObject} from "./helper";


export class seProAuthStrategyOptions extends NbOAuth2AuthStrategyOptions {

  register?: boolean | NbPasswordStrategyModule = {
    alwaysFail: false,
    endpoint: 'register',
    method: 'post',
    requireValidToken: false,
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully registered.'],
  };

  errors?: NbPasswordStrategyMessage = {
    key: 'data.errors',

    getter: (module: string, res: HttpErrorResponse, options: seProAuthStrategyOptions) => getDeepFromObject(
      res.error,
      options.errors.key,
      options[module].defaultErrors,
    ),
  };

  messages?: NbPasswordStrategyMessage = {
    key: 'message',

    getter: (module: string, res: HttpResponse<Object>, options: seProAuthStrategyOptions) => getDeepFromObject(
      res.body,
      options.messages.key,
      options[module].defaultMessages,
    ),
  };
}
export const seProAuthStrategyOptions1: seProAuthStrategyOptions = new seProAuthStrategyOptions();
