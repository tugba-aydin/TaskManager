import { Component, OnInit } from '@angular/core';
import { DailyModel } from 'src/app/core/models/dailyModel';
import { MonthlyModel } from 'src/app/core/models/monthlyModel';
import { WeeklyModel } from 'src/app/core/models/weeklyModel';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allDailyTask:DailyModel[]
  allWeeklyTask:WeeklyModel[]
  allMonthlyTask:MonthlyModel[]
  constructor(private taskManager:TaskManagerService) { }

  ngOnInit() {
    this.getAllDailyTask()
    this.getAllWeeklyTask()
    this.getAllMonthlyTask()
  }

  getAllDailyTask(){
    this.taskManager.getAllDailyTask().subscribe(data=>{
      this.allDailyTask=data
    })
  }

  getAllWeeklyTask(){
    this.taskManager.getAllWeeklyTask().subscribe(data=>{
      this.allWeeklyTask=data
    })
  }

  getAllMonthlyTask(){
    this.taskManager.getAllMonthlyTask().subscribe(data=>{
      this.allMonthlyTask=data
    })
  }
}
