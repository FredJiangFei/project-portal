import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    ShareModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectOverviewComponent]
})
export class ProjectModule { }
