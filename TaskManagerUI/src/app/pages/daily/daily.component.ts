import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyModel } from 'src/app/core/models/dailyModel';
import { AlertifyService } from 'src/app/service/alertify.service';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  public dailiesData: DailyModel[];
  public editDailyById:number
  
  constructor(private taskManager: TaskManagerService,private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getAllDailyTask();
    this.activatedRoute.params.subscribe((params) => {
      this.editDailyById=params['dailyId']
    })
  }

  getAllDailyTask() {
    this.taskManager.getAllDailyTask().subscribe(data => {
      this.dailiesData = data;
    })
  }

  editDailyTask(dailies) {
    this.editDailyById=dailies.id
    this.router.navigateByUrl("/editDaily/"+this.editDailyById);
  }

  deleteDailyTask(dailyId) {
    this.taskManager.deleteDailyTask(dailyId).subscribe(data=>{
      this.getAllDailyTask()
    });
    
  }
}
