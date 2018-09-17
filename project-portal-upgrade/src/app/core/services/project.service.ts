import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { LoginService } from './login.service';
import * as hash from '../../share/tools/hash';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends DataService<Project> {
  constructor(public http: HttpClient,
  private loginService: LoginService) {
    super('projects', http);
   }

   getAll() {
    const digestData = this.loginService.digestData();
    digestData.nc = (Number(digestData.nc) + 1).toString();
    this.loginService.setDigestData(digestData);
    const responseContentHeader = hash.GetAuthResponse(digestData.userHash,
                                                      digestData.nonce,
                                                      digestData.nc,
                                                      digestData.cnonce,
                                                      digestData.qop,
                                                      'GET',
                                                      digestData.clientId,
                                                      digestData.userName,
                                                      digestData.realm,
                                                      'api/projects-paging/');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': responseContentHeader
      })
    };
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(environment.baseUrl + 'api/projects-paging/?IsAsc=true&Keyword=&OrderByPropertyName=ProjectNumber&PageIndex=1&PageSize=10&TabIndex=1', httpOptions);
  }
}
