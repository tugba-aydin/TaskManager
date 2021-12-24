import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeeklyModel } from 'src/app/core/models/weeklyModel';
import { AlertifyService } from 'src/app/service/alertify.service';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  public weekliesData: WeeklyModel[]
  editWeeklyModel:WeeklyModel
  editWeeklyById
  constructor(private taskManager: TaskManagerService,private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getAllWeeklyTask();
    this.activatedRoute.params.subscribe((params) => {
      this.editWeeklyById=params['weeklyId']
    })
  }

  getAllWeeklyTask(){
    this.taskManager.getAllWeeklyTask().subscribe(data => {
      this.weekliesData = data;
    })
  }

  editWeeklyTask(weeklies){
    this.editWeeklyById=weeklies.id
    this.router.navigateByUrl("/editWeekly/"+this.editWeeklyById)
  }

  deleteWeeklyTask(weeklyId){
    this.taskManager.deleteWeeklyTask(weeklyId).subscribe(data=>{
      this.getAllWeeklyTask()
    });
  }
}
