
import { Team } from './../models/team-interface';
import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../models/member';
import { TeamMembersService } from '../services/team-members.service'
import { TeamsService } from '../services/teams.service'

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
  team: Team
  member: Member
  selectedTeam: Team
  selectedMember: Member


  constructor(private teamService: TeamsService, private memberService: TeamMembersService ) { }

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe( data => {
      this.selectedTeam = data
      this.selectedMember = null
      this.team = this.selectedTeam
    });
    this.memberService.memberSelected.subscribe(member => {
      this.selectedMember = member
      this.selectedTeam = null
      this.member = this.selectedMember
    })


  }

  returnToTeam(): void {
    this.teamService.selectedTeam.subscribe( data => {
      this.selectedTeam = data
      this.selectedMember = null
    });
  }

}
