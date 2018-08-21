import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { WhatIsCloudComponent } from './what-is-cloud/what-is-cloud.component';
import { TopicsCoveredComponent } from './topics-covered/topics-covered.component';
import { TopicsCoveredExplainedComponent } from './topics-covered-explained/topics-covered-explained.component';
import { SectionIntroComponent } from './section-intro/section-intro.component';
import { SectionMgmtComponent } from './section-mgmt/section-mgmt.component';
import { SectionIaasComponent } from './section-iaas/section-iaas.component';
import { SectionPaasComponent } from './section-paas/section-paas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'what-is-cloud', component: WhatIsCloudComponent },
  { path: 'topics-covered', component: TopicsCoveredComponent },
  { path: 'topics-covered-explained', component: TopicsCoveredExplainedComponent },
  { path: 'section-intro', component: SectionIntroComponent },
  { path: 'section-mgmt', component: SectionMgmtComponent },
  { path: 'section-iaas', component: SectionIaasComponent },
  { path: 'section-paas', component: SectionPaasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
