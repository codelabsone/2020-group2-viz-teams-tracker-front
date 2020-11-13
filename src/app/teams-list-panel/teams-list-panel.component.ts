import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
import {TooltipPosition} from '@angular/material/tooltip';
import { Member } from '../models/member';
import { Identifiers } from '@angular/compiler';
import { TeamsService } from '../teams.service';
import { FormControl } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

import { PicsumService } from '../picsum.service';
import { AddTeamDialogComponent } from '../add-team-dialog/add-team-dialog.component';

@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {
  member: Member
  memberPic: string
  images = [];
  teams: Team[] = TEAMS;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  title = 'group2-viz-teams-tracker-front';

  constructor(
    public dialog: MatDialog,
    private teamservice: TeamsService,
    private picsumService: PicsumService
    ) { }

  ngOnInit(): void {
    this.teamservice.getAllTeams().subscribe(x => {
      this.teams = x
    })
  }

  openDialog(team: Team) {
    let dialogRef = this.dialog.open(AddMemberDialogComponent, {
      data: {name: team.name}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.picsumService.getPictures().subscribe((result: any) => {
      this.images = result;
      console.log(this.images);
    })
  }
  openNewTeamDialog() {
    let dialogRef = this.dialog.open(AddTeamDialogComponent, {

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



