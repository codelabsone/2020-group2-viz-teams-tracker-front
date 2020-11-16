import { Team } from './../team';
import { Member } from './../models/member';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';


@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {
  @Input() Member: string;
  @Output() panelClick = new EventEmitter<Team>();

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

  showTeam(team: Team) {
    this.panelClick.emit(team)
    console.log("this")
  }
}
