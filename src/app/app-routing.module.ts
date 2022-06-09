import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopUpChildComponent } from './pop-up-child/pop-up-child.component';
import { PopUpParentComponent } from './pop-up-parent/pop-up-parent.component';
import { ChildOneComponent } from './pop-up-parent/child-one/child-one.component';



const routes: Routes = [
  {path:'pop-up-child', component: PopUpChildComponent},
  {path:'pop-up-parent', component: PopUpParentComponent},
  {path:'child-one', component: ChildOneComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
