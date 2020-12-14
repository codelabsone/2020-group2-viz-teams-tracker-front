import { InfoContainerComponent } from './info-container/info-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { TeamsListPanelComponent } from './teams-list-panel/teams-list-panel.component';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';
import { TeamsService } from './services/teams.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddTeamDialogComponent } from './add-team-dialog/add-team-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';

import {MatPaginatorModule} from '@angular/material/paginator';
import { TeamViewComponent } from './team-view/team-view.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { ProgressBarInterceptorService } from './progress-bar-interceptor.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    InfoContainerComponent,
    HeaderComponent,
    TeamsListPanelComponent,
    AddMemberDialogComponent,
    AddTeamDialogComponent,
    TeamViewComponent,
    MemberViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    FormsModule,


  ],
  providers: [TeamsService,
  {provide: HTTP_INTERCEPTORS,
    useClass: ProgressBarInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
