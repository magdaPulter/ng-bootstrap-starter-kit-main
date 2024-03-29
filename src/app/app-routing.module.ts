import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';








const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', component: HomeComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
  exports: [RouterModule],
})
export class AppRoutingModule { }
