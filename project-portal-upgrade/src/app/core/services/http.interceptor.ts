import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as hash from '../../share/tools/hash';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('/api/login')) {
            const digestData = JSON.parse(localStorage.getItem('digestData'));
            digestData.nc = (Number(digestData.nc) + 1).toString();
            localStorage.setItem('digestData', JSON.stringify(digestData));
            const responseContentHeader = hash.GetAuthResponse(digestData.userHash,
                                                              digestData.nonce,
                                                              digestData.nc,
                                                              digestData.cnonce,
                                                              digestData.qop,
                                                              req.method,
                                                              digestData.clientId,
                                                              digestData.userName,
                                                              digestData.realm);
            req = req.clone({ headers: req.headers.set('Authorization', responseContentHeader) });
        }

        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        return throwError(error.statusText);
                    }

                    const applicationError = error.headers.get('Application-Error');
                    if (applicationError) {
                        console.error(applicationError);
                        return throwError(applicationError);
                    }

                    const serverError = error.error;
                    let modalStateErrors = '';
                    if (serverError && typeof serverError === 'object') {
                        for (const key in serverError) {
                            if (serverError[key]) {
                                modalStateErrors += serverError[key] + '\n';
                            }
                        }
                    }

                    return throwError(modalStateErrors || serverError || 'Server Error');
                }
            })
        );
    }
}
