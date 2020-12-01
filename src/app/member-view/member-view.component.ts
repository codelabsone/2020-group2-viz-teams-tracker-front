import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { TEAMS } from '../mock-files/mock-teams';
import { Team } from '../models/team-interface';
import { TeamMembersService } from '../services/team-members.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {
  team: Team
  member: Member
  constructor(private memberService: TeamMembersService, private teamService: TeamsService) { }

  ngOnInit(): void {

    this.teamService.selectedTeam.subscribe( team => {
      this.team = team
    })
    this.memberService.memberSelected.subscribe( member => {
      this.member = member
    })
  }


  returnToTeam(): void {
    
    
  }

}
