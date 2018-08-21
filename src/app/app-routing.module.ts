import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { WhatIsCloudComponent } from './what-is-cloud/what-is-cloud.component';
import { TopicsCoveredComponent } from './topics-covered/topics-covered.component';
import { TopicsCoveredExplainedComponent } from './topics-covered-explained/topics-covered-explained.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'what-is-cloud', component: WhatIsCloudComponent },
  { path: 'topics-covered', component: TopicsCoveredComponent },
  { path: 'topics-covered-explained', component: TopicsCoveredExplainedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
