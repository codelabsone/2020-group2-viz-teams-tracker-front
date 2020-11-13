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
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { TeamsListPanelComponent } from './teams-list-panel/teams-list-panel.component';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';
import { TeamsService } from './teams.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';

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
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule

  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
