import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './otherpages/consult/consult.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:AppComponent},
  { path: 'consult', component:ConsultComponent},
  { path: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
