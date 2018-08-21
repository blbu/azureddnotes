import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { WhatIsCloudComponent } from './what-is-cloud/what-is-cloud.component';
import { TopicsCoveredComponent } from './topics-covered/topics-covered.component';
import { TopicsCoveredExplainedComponent } from './topics-covered-explained/topics-covered-explained.component';
import { SectionIntroComponent } from './section-intro/section-intro.component';
import { SectionMgmtComponent } from './section-mgmt/section-mgmt.component';
import { SectionIaasComponent } from './section-iaas/section-iaas.component';
import { SectionPaasComponent } from './section-paas/section-paas.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    WhatIsCloudComponent,
    TopicsCoveredComponent,
    TopicsCoveredExplainedComponent,
    SectionIntroComponent,
    SectionMgmtComponent,
    SectionIaasComponent,
    SectionPaasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
