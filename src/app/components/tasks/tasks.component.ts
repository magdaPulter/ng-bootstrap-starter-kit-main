import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { EmployeeQueryModel } from 'src/app/query-models/employee.query-model';
import { TasksQueryModel } from 'src/app/query-models/tasks.query-model';
import { EmployeeService } from 'src/app/services/employee.service';
import { TasksModel } from '../../models/tasks.model';
import { TasksService } from '../../services/tasks.service';
import { DueDatePipe } from '../../pipes/due-date/due-date.pipe';
import { CheckListPercentPipe } from '../../pipes/check-list-percent/check-list-percent.pipe';
import { ChecklistPipe } from '../../pipes/checklist/checklist.pipe';
import { TasksCardComponent } from '../tasks-card/tasks-card.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent, NgFor, TasksCardComponent, AsyncPipe, ChecklistPipe, CheckListPercentPipe, DueDatePipe]
})
export class TasksComponent {
  
  readonly tasks$: Observable<TasksQueryModel[]> = combineLatest([
    this._tasksService.getAll(),
    this._employeeService.getAll(), 
    this._tasksService.getAllChecklist()
  ]).pipe(
    map(([tasks, employees, checkList ]) => {
      const employeeMap = employees.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr}
      }, {} as Record<string, EmployeeQueryModel>)
      const checkListMap = checkList.reduce((acc, curr) => {
        return {...acc, [curr.id]: curr.isDone}
      }, {} as Record<string, boolean>)
      return tasks.map(tasks => {
        return {
          name: tasks.name,
          dueDate: tasks.dueDate, 
          checkListBoolean: tasks.checkList.map(assigneeId => checkListMap[assigneeId]),
          members: tasks.assigneeIds.map(assigneeId => employeeMap[assigneeId]),
        }
      })
    }))


  constructor(private _tasksService: TasksService, private _employeeService: EmployeeService) {
  }
}

