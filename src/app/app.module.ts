import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Comp1Component } from './sample/comp1/comp1.component';
import { Comp2Component } from './sample/comp2/comp2.component';
import { Comp3Component } from './sample/comp3/comp3.component';
import { Comp4Component } from './sample/comp4/comp4.component';
import { Comp5Component } from './sample/comp5/comp5.component';
import { Comp6Component } from './sample/comp6/comp6.component';
import { Comp7Component } from './sample/comp7/comp7.component';
import { Comp8Component } from './sample/comp8/comp8.component';
import { Comp9Component } from './sample/comp9/comp9.component';
import { Home2Component } from './home2/home2.component';
import { IntersectionObserverDirective } from './shared/directives/intersection-observer.directive';
import { Home3Component } from './home3/home3.component';
import { ViewportTriggerComponent } from './shared/components/viewport-trigger/viewport-trigger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp8Component,
    Comp9Component,
    Home2Component,
    IntersectionObserverDirective,
    Home3Component,
    ViewportTriggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
