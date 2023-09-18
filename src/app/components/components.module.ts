import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class ComponentsModule {}
