import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
    constructor(public http: HttpClient) {

    }

    getDigest() {
        return this.http.get(environment.baseUrl + 'api/authenticate');
    }

    login (digest, username, password, clientId) {
        const arr = digest.split(',');
        const realm = arr[0].replace('Digest realm="', '').replace('"', '').replace(' ', '');
        const nonce = arr[1].replace('nonce="', '').replace('"', '').replace(' ', '');
        const qop = arr[2].replace('qop="', '').replace('"', '').replace(' ', '');
        const cnonce = 'bd5fd9b093dccaa1';
        const nc = '00000001';
        const url = 'api/login';

        // const userHash = hash.SHA256(username + ':' + realm + ':' + hash.SHA256(password));

        const request = {
            UserName: username,
            ClientId: clientId,
            // Password: hash.SHA256(password)
        };
        const config = {
            // headers: { 'Authorization': hash.GetAuthResponse(userHash, nonce, nc, cnonce, qop, 'GET', clientId, username, realm, url) },
            params: request
        };
        return this.http.get(environment.baseUrl + 'api/login', config);
    }
}
