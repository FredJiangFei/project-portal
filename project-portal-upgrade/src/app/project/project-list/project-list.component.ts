import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project';
import { finalize } from 'rxjs/operators';
import { PagingRequest } from '../../core/services/commands/paging.request';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  loadingData: boolean;
  command = new PagingRequest();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loadingData = true;
    this.command.IsAsc =  true;
    this.command.OrderByPropertyName = 'ProjectNumber';
    this.command.TabIndex = 1;
    this.projectService.getAllPaging(this.command)
    .pipe(
      finalize(() => this.loadingData = false)
    )
    .subscribe(data => this.projects = data.ProjectViews);
  }
}
