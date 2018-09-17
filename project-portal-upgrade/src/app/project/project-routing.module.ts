import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { AuthGurd } from '../share/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ProjectListComponent },
            { path: ':id', component: ProjectOverviewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
