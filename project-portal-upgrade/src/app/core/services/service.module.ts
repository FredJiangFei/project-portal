import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalService } from './proposal.service';
import { ProjectService } from './project.service';
import { LoginService } from './login.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        ProjectService,
        ProposalService,
        LoginService],
})
export class ServiceModule {
}
