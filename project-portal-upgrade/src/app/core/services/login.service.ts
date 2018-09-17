import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import * as hash from '../../share/tools/hash';

@Injectable()
export class LoginService {
    constructor(public http: HttpClient) {

    }

    getDigest() {
        return this.http.get(environment.baseUrl + 'authenticate', {observe: 'response'})
        .pipe(
            map(_response => _response.headers.get('WWW-Authenticate'))
        );
    }

    login (digest, username, password, clientId) {
        const arr = digest.split(',');
        const realm = arr[0].replace('Digest realm="', '').replace('"', '').replace(' ', '');
        const nonce = arr[1].replace('nonce="', '').replace('"', '').replace(' ', '');
        const qop = arr[2].replace('qop="', '').replace('"', '').replace(' ', '');
        const cnonce = 'bd5fd9b093dccaa1';
        const nc = '00000001';
        const url = 'api/login';
        const userHash = hash.SHA256(username + ':' + realm + ':' + hash.SHA256(password));

        const request = {
            UserName: username,
            ClientId: clientId,
            Password: hash.SHA256(password)
        };
        const auth = hash.GetAuthResponse(userHash, nonce, nc, cnonce, qop, 'GET', clientId, username, realm, url);
        const config = {
            headers: { 'Authorization': auth },
            params: request
        };
        return this.http.get(environment.baseUrl + 'login', config)
        .pipe(
            tap(x => {
                localStorage.setItem('loginUser', JSON.stringify(x));
                const digestData = {
                    userHash: userHash,
                    nonce: nonce,
                    nc: nc,
                    cnonce: cnonce,
                    qop: qop,
                    clientId: clientId,
                    userName: username,
                    realm: realm
                };
                localStorage.setItem('digestData', JSON.stringify(digestData));
              }
            )
        );
    }

    logout() {
        localStorage.removeItem('loginUser');
    }

    loginUser() {
        return JSON.parse(localStorage.getItem('loginUser'));
    }

    loggedIn() {
        const loginUser = localStorage.getItem('loginUser');
        return !!loginUser;
    }

    clearUser() {
        return localStorage.removeItem('loginUser');
    }
}
