import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TEAMS } from '../mock-files/mock-teams';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from './../services/teams.service';
import { Team } from './../models/team-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.scss']
})
export class AddTeamDialogComponent implements OnInit {
  formGroup = new FormGroup({
    // parameter: new FormControl('', Validators.required)
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<AddTeamDialogComponent>,
    private teamsService: TeamsService,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, description: string},
    private router: Router, private teamService:TeamsService) { }

  ngOnInit(): void {

  }

  submit() {
    console.log("submitted")
    const newTeam = new Team (this.formGroup.value);
    console.log(this.formGroup.value);
    this.teamsService.addNewTeam(newTeam).subscribe((data: Team) => {
      localStorage.setItem('name', data.name);
      localStorage.setItem('description', data.description);
      this.dialogRef.close(newTeam)
    })
  }
}
