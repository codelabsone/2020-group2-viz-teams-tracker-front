import { Team } from './../team';
import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Member } from '../models/member';
import { TeamMembersService } from '../team-members.service'



@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {

  selectedTeam: Team
  selectedMember: Member
  constructor(private teamService: TeamsService, private memberService: TeamMembersService ) { }

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe( data => {
      this.selectedTeam = data
    });
    this.memberService.memberSelected.subscribe(data => {
      this.selectedMember = data
    })
  }
}
