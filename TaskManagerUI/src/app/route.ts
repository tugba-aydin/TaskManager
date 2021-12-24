import {Routes} from '@angular/router'
import { AddTaskComponent } from './pages/add-task/add-task.component'
import { DailyComponent } from './pages/daily/daily.component'
import { EditDailyComponent } from './pages/daily/edit-daily/edit-daily.component'
import { HomeComponent } from './pages/home/home.component'
import { EditMonthlyComponent } from './pages/monthly/edit-monthly/edit-monthly.component'
import { MonthlyComponent } from './pages/monthly/monthly.component'
import { EditWeeklyComponent } from './pages/weekly/edit-weekly/edit-weekly.component'
import { WeeklyComponent } from './pages/weekly/weekly.component'

export const appRoutes : Routes =[
    {path:'home',component:HomeComponent},
    {path:'daily',component:DailyComponent},
    {path:'monthly',component:MonthlyComponent},
    {path:'weekly',component:WeeklyComponent},
    {path:'addTask',component:AddTaskComponent},
    {path:'editDaily/:dailyId',component:EditDailyComponent},
    {path:'editWeekly/:weeklyId',component:EditWeeklyComponent},
    {path:'editMonthly/:monthlyId',component:EditMonthlyComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
]