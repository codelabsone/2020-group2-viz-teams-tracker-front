import { Team } from './../team';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
  @Input() team: Team = new Team({id: null, name: ''});

  constructor() { }

  ngOnInit(): void {
  }

}
