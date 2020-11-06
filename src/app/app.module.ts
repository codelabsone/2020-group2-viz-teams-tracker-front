import { InfoContainerComponent } from './info-container/info-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {MatExpansionModule} from '@angular/material/expansion';
import { TeamsListPanelComponent } from './teams-list-panel/teams-list-panel.component';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoContainerComponent,
    HeaderComponent,
    TeamsListPanelComponent,
    AddMemberDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,

    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
