import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalService } from './proposal.service';
import { ProjectService } from './project.service';
import { LoginService } from './login.service';
import { InterceptorProvider } from './http.interceptor';
import { DataService } from './data.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers:
    [
        DataService,
        ProjectService,
        ProposalService,
        LoginService,
        InterceptorProvider
    ],
})
export class ServiceModule {
}
