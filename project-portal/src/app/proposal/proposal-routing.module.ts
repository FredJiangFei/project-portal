import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalOverviewComponent } from './proposal-overview/proposal-overview.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: ProposalListComponent },
            { path: ':id', component: ProposalOverviewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProposalRoutingModule { }
