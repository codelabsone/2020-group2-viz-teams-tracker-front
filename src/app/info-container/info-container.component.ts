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

  selectedTeam: Team
  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe( data => {
      this.selectedTeam = data
    });
  }
}
