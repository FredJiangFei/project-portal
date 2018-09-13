import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  tabIndex: number;
  projects = [];
  projectColumns = [
    { name: 'ProjectNumber', sortable: true, direction: 0, otherName: 'proposalResource.proposalNr' },
    { name: 'ProjectName', sortable: true, direction: 0, otherName: 'proposalResource.proposalName' },
    { name: 'Address', sortable: true, direction: 0, otherName: 'commonResource.address' },
    { name: 'CustomerName', sortable: true, direction: 0, otherName: 'commonResource.customer' },
    { name: 'ProjectManager', sortable: true, direction: 0, otherName: 'projectResource.projectManager' },
    { name: 'Client', sortable: true, direction: 0, otherName: 'commonResource.client' },
    { name: 'StatusId', sortable: true, direction: 0, otherName: 'projectResource.status' },
    { name: 'Price', otherName: 'projectResource.price' }
];
  constructor() { }

  ngOnInit() {
  }

  changeProjectTab(index: number) {
    this.tabIndex = index;
  }

}
