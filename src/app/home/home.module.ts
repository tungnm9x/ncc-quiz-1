import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeCardListComponent } from './home-card-list/home-card-list.component';
import { HomeCardItemComponent } from './home-card-item/home-card-item.component';

@NgModule({
  declarations: [HomeComponent, HomeIntroComponent, HomeCardListComponent, HomeCardItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
