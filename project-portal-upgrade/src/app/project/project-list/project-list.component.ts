import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'address'];
  projects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(data => {
      console.log(data.ProjectViews);
      this.projects = data.ProjectViews;
    });
  }
}
