import { Team } from '../models/team-interface';
import { Member } from './../models/member';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
import {TooltipPosition} from '@angular/material/tooltip';
import { Identifiers } from '@angular/compiler';
import { TeamsService } from '../services/teams.service';
import { FormControl } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PicsumService } from '../services/picsum.service';
import { AddTeamDialogComponent } from '../add-team-dialog/add-team-dialog.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {
  @Input() Member: string;
  @Output() panelClick = new EventEmitter<Team>();
  member: Member
  team: Team
  otherTeam: Team
  memberPic: string
  images = [];
  teams: Team[] = TEAMS;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  title = 'group2-viz-teams-tracker-front';
  connectedTo = [];
  constructor(
    public dialog: MatDialog,
    private teamservice: TeamsService,
    private picsumService: PicsumService,
    ) { }

  ngOnInit(): void {
    this.teamservice.getAllTeams().subscribe(data => {
      this.teams = data
      for (let team of this.teams) {
        this.connectedTo.push(team)
      };
    })
  }




  drop(event: CdkDragDrop<string[]>, team: Team) {
    if (event.previousContainer === event.container) 
    {
      moveItemInArray(team.members, event.previousIndex, event.currentIndex);
      console.log(team.members)

    } 
    else {
      
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex );
        console.log(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  openDialog(team: Team) {

    this.picsumService.getPictures().subscribe((result: any) => {
      this.images = result;
      console.log(this.images);
    })

    let dialogRef = this.dialog.open(AddMemberDialogComponent, {
      data: {name: team.name}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  openNewTeamDialog() {
    let dialogRef = this.dialog.open(AddTeamDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.teams.push(result)
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

  showTeam(team: Team) {
    this.teamservice.selectedTeam.next(team)
    console.log("this")
  }
}





