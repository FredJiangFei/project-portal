import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'address'];
  projects: Project[];
  loadingData: boolean;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loadingData = true;
    this.projectService.getAll()
    .pipe(
      finalize(() => this.loadingData = false)
    )
    .subscribe(data => this.projects = data.ProjectViews);
  }
}
