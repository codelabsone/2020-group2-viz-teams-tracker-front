import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Member } from '../models/member';
import { Team } from '../team';
import { TeamMembersService } from '../team-members.service'

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {
  team: Team
  members: Member[] = []
  // memberFriend: Member
  constructor(private teamService: TeamsService, private memberService: TeamMembersService) { }

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

}
