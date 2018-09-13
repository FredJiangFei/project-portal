import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalOverviewComponent } from './proposal-overview/proposal-overview.component';
import { ProposalRoutingModule } from './proposal-routing.module';

@NgModule({
  imports: [
    ShareModule,
    ProposalRoutingModule
  ],
  declarations: [
    ProposalListComponent,
    ProposalOverviewComponent
  ]
})
export class ProposalModule { }
