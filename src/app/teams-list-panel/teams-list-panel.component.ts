import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team';
import { TEAMS } from './../mock-teams';

@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'group2-viz-teams-tracker-front';

  teams = TEAMS;
}
