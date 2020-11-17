import { Team } from './../team';
import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Member } from '../models/member';



@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
 team: Team
 members: Member[] = []

  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe(team => {
      this.team = team
      if (team) {
      this.members = team.members
      }
    })
  }
}
