import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Member } from '../models/member';
import { Team } from '../team';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {
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
