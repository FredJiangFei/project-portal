import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page/my-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'myPage', component: MyPageComponent },
            { path: 'proposals', loadChildren: './proposal/proposal.module#ProposalModule' },
            { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
