import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { MonthlyModel } from 'src/app/core/models/monthlyModel';
import { AlertifyService } from 'src/app/service/alertify.service';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-edit-monthly',
  templateUrl: './edit-monthly.component.html',
  styleUrls: ['./edit-monthly.component.css']
})
export class EditMonthlyComponent implements OnInit {
  monthly: MonthlyModel
  editMonthlyTaskModel:MonthlyModel
  editMonthly: FormGroup
  editById
  constructor(private taskManager: TaskManagerService, private formBuilder: FormBuilder, private alertify: AlertifyService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.editMonthlyForm()
    this.activatedRoute.params.subscribe((params) => {
      this.editById=params['monthlyId']
    })
    this.getMonthlyTaskById()
  }

  editMonthlyForm() {
    this.editMonthly = this.formBuilder.group({
      taskName: ["", Validators.required],
      taskStartDate: ["", Validators.required],
      taskEndDate: ["", Validators.required]
    })
  }

  getMonthlyTaskById(){
    this.taskManager.getMonthlyTaskById(this.editById).subscribe(data=>{
      this.editMonthlyTaskModel=data
    })
  }

  editMonthlyTask() {
    if (this.editMonthly.valid) {
      this.monthly = Object.assign({}, this.editMonthly.value)
      this.monthly.id=this.editMonthlyTaskModel.id
      this.taskManager.updateMonthlyTask(this.monthly)
      this.alertify.success("Aylık görev güncellendi.")
      setTimeout(() => {
        this.router.navigateByUrl("/monthly")
      },
        3000);
    }
    else {
      this.alertify.error("Görev güncellenemedi! Lütfen tekrar deneyin.")
    }
  }
}
