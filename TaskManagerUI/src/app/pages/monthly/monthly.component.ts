import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthlyModel } from 'src/app/core/models/monthlyModel';
import { AlertifyService } from 'src/app/service/alertify.service';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  public monthliesData: MonthlyModel[]
  public editMonthlyModel:MonthlyModel
  editMonthlyById

  constructor(private taskManager: TaskManagerService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
   this.getAllMonthlyTask()
   this.activatedRoute.params.subscribe((params) => {
    this.editMonthlyById=params['monthlyId']
  })
  }

  getAllMonthlyTask(){
    this.taskManager.getAllMonthlyTask().subscribe(data => {
      this.monthliesData = data
    })
  }

  editMonthlyTask(monthlies){
    this.editMonthlyById=monthlies.id
    this.router.navigateByUrl("/editMonthly/"+this.editMonthlyById)
  }

  deleteMonthlyTask(monthliesId){
    this.taskManager.deleteMonthlyTask(monthliesId).subscribe(data=>{
      this.getAllMonthlyTask()
    });
    
  }
}
