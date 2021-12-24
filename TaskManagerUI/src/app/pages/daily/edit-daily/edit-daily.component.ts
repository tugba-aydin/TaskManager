import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { DailyModel } from 'src/app/core/models/dailyModel';
import { AlertifyService } from 'src/app/service/alertify.service';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-edit-daily',
  templateUrl: './edit-daily.component.html',
  styleUrls: ['./edit-daily.component.css']
})
export class EditDailyComponent implements OnInit {
  daily: DailyModel
  editDailyTaskModel:DailyModel
  editDaily: FormGroup
  editById
  constructor(private taskManager: TaskManagerService, private formBuilder: FormBuilder, private alertify: AlertifyService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.editDailyForm()
    this.activatedRoute.params.subscribe((params) => {
      this.editById=params['dailyId']
    })
    this.getDailyTaskById()
  }

  editDailyForm() {
    this.editDaily = this.formBuilder.group({
      taskName: ["", Validators.required],
      taskStartDate: ["", Validators.required],
      taskEndDate: ["", Validators.required]
    })
  }

  getDailyTaskById(){
    this.taskManager.getDailyTaskById(this.editById).subscribe(data=>{
      this.editDailyTaskModel=data
    })
  }

  editDailyTask() {
    if (this.editDaily.valid) {
      this.daily = Object.assign({}, this.editDaily.value)
      this.daily.id = this.editDailyTaskModel.id
      this.taskManager.updateDailyTask(this.daily)
      this.alertify.success("Günlük görev güncellendi.")
      setTimeout(() => {
        this.router.navigateByUrl("/daily")
      },
        3000);
    }
    else {
      this.alertify.error("Görev güncellenemedi! Lütfen tekrar deneyin.")
    }
  }
}
