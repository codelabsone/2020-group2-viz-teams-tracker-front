import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Member } from '../models/member';
import { Team } from '../models/team-interface';
import { TeamMembersService } from '../services/team-members.service';
import { TeamsService } from '../services/teams.service';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveTeamDialogComponent } from '../archive-team-dialog/archive-team-dialog.component';


@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TeamViewComponent implements OnInit {
  team: Team
  members: Member[] = []
  // memberFriend: Member
  constructor(private teamService: TeamsService, private memberService: TeamMembersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe(team => {
      this.team = team
      if (team) {
      this.members = team.members
      }
    })
  }

  getMember(member: Member) {
    console.log('hi there friendo')
    this.memberService.memberSelected.next(member)
    console.log(member)

  }

  setDefaultPic(member: Member): string {
    // console.log("member works", member)
    if (member.image === null || member.image === undefined || member.image === "") {
      // console.log("it works")
      return 'assets/images/avatar.png'
    }
    return member.image

  }
  openDialog() {
    const dialogRef = this.dialog.open(ArchiveTeamDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


