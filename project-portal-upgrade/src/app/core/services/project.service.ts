import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends DataService<Project> {
  constructor(public http: HttpClient) {
    super('projects', http);
   }

   getAll() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(environment.baseUrl + 'api/projects-paging/?IsAsc=true&Keyword=&OrderByPropertyName=ProjectNumber&PageIndex=1&PageSize=10&TabIndex=1');
  }
}
