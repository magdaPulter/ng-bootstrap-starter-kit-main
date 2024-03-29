import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IsCLickedDirective } from '../../directives/is-clicked/is-clicked.directive';

@Component({
    selector: 'app-main-continer',
    templateUrl: './main-continer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [IsCLickedDirective, RouterLink, AsyncPipe]
})
export class MainContinerComponent {
  
  private _isClickedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isClicked$: Observable<boolean> = this._isClickedSubject.asObservable();

  onMenuButtonClicked() {
    this._isClickedSubject.next(!this._isClickedSubject.getValue())
  }
}
