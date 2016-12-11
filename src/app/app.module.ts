import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { MembershipService } from './membership/membership.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'o-nama', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'clanstvo', component: MembershipComponent },
  { path: 'projekti', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MembershipComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MembershipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
