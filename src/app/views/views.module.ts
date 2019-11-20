import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { BalanceComponent } from './components/balance/balance.component';
import { WheelsComponent } from './components/wheels/wheels.component';
import { WandsComponent } from './components/wands/wands.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ConstructionComponent,
    BalanceComponent,
    WheelsComponent,
    WandsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent, 
    HomeComponent,
    AboutComponent, 
    ConstructionComponent,
    BalanceComponent,
    WheelsComponent, 
    WandsComponent
  ]
})
export class ViewsModule { }
