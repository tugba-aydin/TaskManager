import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { WeeklyComponent } from './pages/weekly/weekly.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TaskManagerService } from './service/taskManager.service';
import { MonthlyComponent } from './pages/monthly/monthly.component';
import { DailyComponent } from './pages/daily/daily.component';
import { EditDailyComponent } from './pages/daily/edit-daily/edit-daily.component';
import { EditWeeklyComponent } from './pages/weekly/edit-weekly/edit-weekly.component';
import { EditMonthlyComponent } from './pages/monthly/edit-monthly/edit-monthly.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeeklyComponent,
    MonthlyComponent,
    DailyComponent,
    EditDailyComponent,
    EditWeeklyComponent,
    EditMonthlyComponent,
    AddTaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
