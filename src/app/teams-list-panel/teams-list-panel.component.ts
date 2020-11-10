import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';

@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  title = 'group2-viz-teams-tracker-front';

  teams = TEAMS;

  openDialog(team: Team) {
    let dialogRef = this.dialog.open(AddMemberDialogComponent, {
      data: {name: team.name}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
