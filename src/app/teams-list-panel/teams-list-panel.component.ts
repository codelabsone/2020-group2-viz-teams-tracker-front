import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TEAMS } from '../mock-files/mock-teams';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
import { PicsumService } from '../picsum.service';
import { AddTeamDialogComponent } from '../add-team-dialog/add-team-dialog.component';

@Component({
  selector: 'app-teams-list-panel',
  templateUrl: './teams-list-panel.component.html',
  styleUrls: ['./teams-list-panel.component.scss']
})
export class TeamsListPanelComponent implements OnInit {

  constructor(public dialog: MatDialog, private picsumService: PicsumService) { }

  ngOnInit(): void {
    
  }
  title = 'group2-viz-teams-tracker-front';

  teams = TEAMS;
  images = [];
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
    });
  }
}
