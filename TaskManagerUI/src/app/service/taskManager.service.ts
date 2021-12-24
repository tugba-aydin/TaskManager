import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyModel } from '../core/models/dailyModel';
import { WeeklyModel } from '../core/models/weeklyModel';
import { MonthlyModel } from '../core/models/monthlyModel';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor(private httpClient: HttpClient) { }
  dailyPath = 'https://localhost:44379/api/Daily'
  weeklyPath = 'https://localhost:44379/api/Weekly'
  monthlyPath = 'https://localhost:44379/api/Monthly'

  getAllDailyTask(): Observable<DailyModel[]> {
    return this.httpClient.get<DailyModel[]>(this.dailyPath);
  }

  getAllWeeklyTask(): Observable<WeeklyModel[]> {
    return this.httpClient.get<WeeklyModel[]>(this.weeklyPath);
  }

  getAllMonthlyTask(): Observable<MonthlyModel[]> {
    return this.httpClient.get<MonthlyModel[]>(this.monthlyPath);
  }

  getDailyTaskById(dailyId):Observable<DailyModel>{
    return this.httpClient.get<DailyModel>(`${this.dailyPath}/${dailyId}`)
  }

  getWeeklyTaskById(weeklyId):Observable<WeeklyModel>{
    return this.httpClient.get<WeeklyModel>(`${this.weeklyPath}/${weeklyId}`)
  }

  getMonthlyTaskById(monthlyId):Observable<MonthlyModel>{
    return this.httpClient.get<MonthlyModel>(`${this.monthlyPath}/${monthlyId}`)
  }

  createDailyTask(dailyTask:DailyModel){
    this.httpClient.post(this.dailyPath,dailyTask).subscribe();
  }

  createWeeklyTask(weeklyTask:WeeklyModel){
    this.httpClient.post(this.weeklyPath,weeklyTask).subscribe();
  }

  createMonthlyTask(monthlyTask:MonthlyModel){
    this.httpClient.post(this.monthlyPath,monthlyTask).subscribe();
  }

  updateDailyTask(dailyTask){
    return this.httpClient.put(this.dailyPath,dailyTask).subscribe();
  }

  updateWeeklyTask(weeklyTask){
    return this.httpClient.put(this.weeklyPath,weeklyTask).subscribe();
  } 

  updateMonthlyTask(monthlyTask){
    return this.httpClient.put(this.monthlyPath,monthlyTask).subscribe();
  }

  deleteDailyTask(dailyId){
    return this.httpClient.delete(`${this.dailyPath}/${dailyId}`)
  }

  deleteWeeklyTask(weeklyId){
    return this.httpClient.delete(`${this.weeklyPath}/${weeklyId}`)
  }

  deleteMonthlyTask(monthlyId){
    return this.httpClient.delete(`${this.monthlyPath}/${monthlyId}`)
  }
}
