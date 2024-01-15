import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PlansComponent } from './plans/plans.component';
import { DietChartComponent } from './diet-chart/diet-chart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SchedulesComponent,
    PlansComponent,
    DietChartComponent,
    FeedbackComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
