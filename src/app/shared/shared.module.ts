import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BackgroundImageDirective } from './directives/background-image.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    SideMenuComponent,
    BackgroundImageDirective
  ],
  declarations: [
    SideMenuComponent,
    BackgroundImageDirective
  ]
})
export class SharedModule { }
