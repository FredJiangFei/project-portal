import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  project: Project;
  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    const projectId = this.activatedRoute.snapshot.params['id'];
    this.projectService.get(projectId).subscribe(data => this.project = data);
  }
}
