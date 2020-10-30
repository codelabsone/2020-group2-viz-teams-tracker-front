import { Component } from '@angular/core';
import { Team } from 'src/app/team';
import { TEAMS } from './mock-teams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'group2-viz-teams-tracker-front';

  teams = TEAMS;
}
