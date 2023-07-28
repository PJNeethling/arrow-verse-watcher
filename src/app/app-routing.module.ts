import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchListComponent } from './components/watch-list/watch-list.component';

const routes: Routes = [
  {
    path: '',
    component: WatchListComponent,
  }  
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})

export class AppRoutingModule { }