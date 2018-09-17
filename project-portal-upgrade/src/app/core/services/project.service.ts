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

   getAllPaging(command: any) {
    return this.http.get<any>(environment.baseUrl + 'api/projects-paging/', { params: command });
  }
}
