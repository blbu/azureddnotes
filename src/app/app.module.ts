import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { WhatIsCloudComponent } from './what-is-cloud/what-is-cloud.component';
import { TopicsCoveredComponent } from './topics-covered/topics-covered.component';
import { TopicsCoveredExplainedComponent } from './topics-covered-explained/topics-covered-explained.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    WhatIsCloudComponent,
    TopicsCoveredComponent,
    TopicsCoveredExplainedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
