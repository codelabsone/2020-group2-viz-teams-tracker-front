import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Team } from 'src/app/team';
import { TEAMS } from './../mock-teams';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  constructor() { }
  teams: Team[] = TEAMS;
  ngOnInit(): void {
    console.log(TEAMS)
  }



}
