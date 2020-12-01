import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { Team } from '../models/team-interface';
import { TeamMembersService } from '../services/team-members.service';
import { TeamsService } from '../services/teams.service';

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
