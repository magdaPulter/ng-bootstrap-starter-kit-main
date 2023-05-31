import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderComponentModule {
}
