import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    SidebarComponent,
    AboutPageComponent,
    ContactPageComponent
  ]
})
export class SharedModule { }
