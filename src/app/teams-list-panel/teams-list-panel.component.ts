import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
import { TeamsService } from '../teams.service'

@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {

  constructor(private teamService: TeamsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(data => {
      this.teams = data
    }) 
  }
  title = 'group2-viz-teams-tracker-front';

  teams: Team[];

  openDialog() {
    const dialogRef = this.dialog.open(AddMemberDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
