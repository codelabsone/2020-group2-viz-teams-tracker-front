import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
import { Member } from '../models/member';
import { Identifiers } from '@angular/compiler';
import { TeamsService } from '../teams.service'

@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {
  member: Member
  memberPic: string
  teams: Team[]

  constructor(public dialog: MatDialog, private teamservice: TeamsService) { }

  ngOnInit(): void {

    this.teamservice.getAllTeams().subscribe(x => {
      this.teams = x
    })
  }
  title = 'group2-viz-teams-tracker-front';


  openDialog(team: Team) {
    let dialogRef = this.dialog.open(AddMemberDialogComponent, {
      data: {name: team.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setDefaultPic(member: Member): string {
    // console.log("member works", this.member)
    if (member.pic === null || member.pic === undefined) {
      // console.log("it works")
      return 'assets/images/avatar.png'
    }
    return member.pic

  }
}
