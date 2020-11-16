import { Member } from './../models/member';
import { Team } from 'src/app/team';
import { TEAMS } from './../mock-files/mock-teams';
import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-container',
  templateUrl: './big-container.component.html',
  styleUrls: ['./big-container.component.scss']
})
export class BigContainerComponent implements OnInit {
  teamInfo: Team;


  constructor() { }

  ngOnInit(): void {
  }

  displayTeam($event) {
    this.teamInfo = $event
    console.log("this")
  }

}
