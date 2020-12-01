import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Member } from '../models/member';
import { Team } from '../team';
import { TeamMembersService } from '../team-members.service';
import { TEAMS } from '../mock-files/mock-teams';

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
