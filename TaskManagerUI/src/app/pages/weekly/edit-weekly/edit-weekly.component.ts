import { Component, Input, OnInit } from '@angular/core';
import { WeeklyModel } from 'src/app/core/models/weeklyModel';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { TaskManagerService } from 'src/app/service/taskManager.service';
import { AlertifyService } from 'src/app/service/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-weekly',
  templateUrl: './edit-weekly.component.html',
  styleUrls: ['./edit-weekly.component.css']
})
export class EditWeeklyComponent implements OnInit {
  weekly: WeeklyModel
  editWeekly: FormGroup
  editWeeklyTaskModel:WeeklyModel
  editById
  constructor(private taskManager: TaskManagerService, private formBuilder: FormBuilder, private alertify: AlertifyService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.editWeeklyForm()
    this.activatedRoute.params.subscribe((params) => {
      this.editById=params['weeklyId']
    })
    this.getWeeklyTaskById()
  }

  editWeeklyForm() {
    this.editWeekly = this.formBuilder.group({
      taskName: ["", Validators.required],
      taskStartDate: ["", Validators.required],
      taskEndDate: ["", Validators.required]
    })
  }

  getWeeklyTaskById(){
    this.taskManager.getWeeklyTaskById(this.editById).subscribe(data=>{
      this.editWeeklyTaskModel=data
      console.log(this.editWeeklyTaskModel.taskStartDate)
    })
  }

  editWeeklyTask() {
    if (this.editWeekly.valid) {
      this.weekly = Object.assign({}, this.editWeekly.value)
      this.weekly.id=this.editWeeklyTaskModel.id
      this.taskManager.updateWeeklyTask(this.weekly)
      this.alertify.success("Haftalık görev güncellendi.")
      setTimeout(() => {
        this.router.navigateByUrl("/weekly")
      },
        3000);
    }
    else {
      this.alertify.error("Görev güncellenemedi! Lütfen tekrar deneyin.")
    }

  }
}
