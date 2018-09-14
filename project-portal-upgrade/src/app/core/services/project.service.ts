import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends DataService<Project> {
  constructor(public http: HttpClient) {
    super('projects', http);
   }

   getAll() {
    const httpOptions = {
      headers: new HttpHeaders({
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Digest username="martin@pp.se", realm="ProjectPortal", nonce="NjM2NzI0ODk0MDc3NjkuNDpmMjA5YmVjZjk2YmNiNzliODZlYjA4ZTg5OGRhZmYyZQ==", uri="api/projects-paging/", response="1002766106ed3f97a4e105ca35a806ba5652ef017e4a5ff2073cc546971b416e", qop=auth, nc=18, cnonce="undefined", clientId="1"'
      })
    };
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>('http://localhost:11797/api/projects-paging/?IsAsc=true&Keyword=&OrderByPropertyName=ProjectNumber&PageIndex=1&PageSize=10&TabIndex=1', httpOptions);
  }
}
