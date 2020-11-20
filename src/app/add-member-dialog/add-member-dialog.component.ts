import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Team } from '../models/team';
import { TEAMS } from './../mock-files/mock-teams';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeamsService } from '../teams.service';


@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  constructor(private teamService: TeamsService, @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
  teams: Team[] = TEAMS;
  positions = ['Software Engineer', 'Quality Engineer', 'Team Anchor']
  ngOnInit(): void {
 this.teamService.getAllTeams().subscribe((teams: Team[])=> {this.teams = teams})



}
}
