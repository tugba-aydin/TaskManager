import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { DailyModel } from 'src/app/core/models/dailyModel';
import { MonthlyModel } from 'src/app/core/models/monthlyModel';
import { WeeklyModel } from 'src/app/core/models/weeklyModel';
import { AlertifyService } from 'src/app/service/alertify.service';
import { TaskManagerService } from 'src/app/service/taskManager.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup
  addDailyTask: DailyModel
  addWeeklyTask: WeeklyModel
  addMonthlyTask: MonthlyModel
  selectedValue

  constructor(private formBuilder: FormBuilder, private taskManager: TaskManagerService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.createAddTaskForm()
  }

  createAddTaskForm() {
    this.addTaskForm = this.formBuilder.group({
      taskName: ["", Validators.required],
      taskStartDate: ["", Validators.required],
      taskEndDate: ["", Validators.required]
    })
  }

  onItemChange(e) {
    this.selectedValue = e.value
  }

  addTask() {
    if (this.addTaskForm.valid && this.selectedValue != undefined) {
      if (this.selectedValue == "Günlük") {
        this.addDailyTask = Object.assign({}, this.addTaskForm.value)
        this.taskManager.createDailyTask(this.addDailyTask);
        this.alertify.success("Günlük görev başarıyla eklendi.")
        setTimeout(() => {
          this.router.navigateByUrl("/home")
        },
          2000);
      }
      else if (this.selectedValue == "Haftalık") {
        this.addWeeklyTask = Object.assign({}, this.addTaskForm.value)
        this.taskManager.createWeeklyTask(this.addWeeklyTask)
        this.alertify.success("Haftalık görev başarıyla eklendi.")
        setTimeout(() => {
          this.router.navigateByUrl("/home")
        },
          2000);
      }
      else if (this.selectedValue = "Aylık") {
        this.addMonthlyTask = Object.assign({}, this.addTaskForm.value)
        this.taskManager.createMonthlyTask(this.addMonthlyTask)
        this.alertify.success("Aylık görev başarıyla eklendi.")
        setTimeout(() => {
          this.router.navigateByUrl("/home")
        },
          2000);
      }
    }
    else {
      this.alertify.error("Geçersiz veri girişi! Lütfen verileri doğru şekilde giriniz.")
    }
  }
}
