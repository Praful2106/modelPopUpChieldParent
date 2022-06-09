import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopUpChildComponent } from './pop-up-child/pop-up-child.component';
import { PopUpParentComponent } from './pop-up-parent/pop-up-parent.component';
import { ChildOneComponent } from './pop-up-parent/child-one/child-one.component';
import { ChildTwoComponent } from './pop-up-parent/child-two/child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    PopUpChildComponent,
    PopUpParentComponent,
    ChildOneComponent,
    ChildTwoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
