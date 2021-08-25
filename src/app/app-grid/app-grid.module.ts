import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppGridRoutingModule } from './app-grid-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

import { CountryComponent } from './country/country.component';
import { SkillsComponent } from './skills/skills.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GridViewComponent } from './grid-view/grid-view.component';

@NgModule({
  declarations: [
    CountryComponent,
    SkillsComponent,
    ProficiencyComponent,
    UserDetailsComponent,
    GridViewComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    MatPaginatorModule, 
    MatCheckboxModule, 
    MatTableModule,
    AppGridRoutingModule,
    MatSortModule,
    MatProgressBarModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [],
})
export class AppGridModule { }
